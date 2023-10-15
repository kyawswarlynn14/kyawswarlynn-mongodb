import React, { useEffect, useState } from 'react'
import { DeleteOnePortfolio, getPortfolios } from '../../services';
import { deleteFile } from '../../firebase';
import { FaPlus } from 'react-icons/fa';
import { BiSolidMessageEdit } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function AdminPortfolios() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getPortfolios().then(data => {
        setData(data);
    })
  }, [])

  const handleItemDelete = async (event, id, fb_url) => {
    event.stopPropagation();

    try {
      deleteFile(fb_url);
      await DeleteOnePortfolio(id);

      setData(prev => 
        prev.filter(d => d._id != id)
      );
    } catch (error) {
      alert("An error occurred while deleting the item: " + error.message);
    }
  };

  const filteredData = data.filter((d) => {
    const nameMatch = d.title.toLowerCase().includes(searchInput.toLowerCase());
  
    return nameMatch;
  });

  return (
    <div className='bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] text-white min-h-screen'>
      <div className='w-[80%] mx-auto '>
        <div className="py-4 flex items-center space-x-4">
            <input
            type="text"
            placeholder="Search by title..."
            className="px-4 py-2 w-80 rounded-lg bg-gray-800 text-gray-200 focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>

        <div className='w-full flex justify-between'>
            <p className='font-bold text-xl tracking-wider'>Portfolios</p>

            <a href='/create-portfolio' className='adminButton'>
                <FaPlus /> Portfolio
            </a>                  
        </div>

        <table className="w-full mt-4 shadow-xl text-left text-gray-200">
            <thead className=" bg-gray-700 text-gray-300">
                <tr>
                    <th scope="col" className="px-6 py-3">No</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Content</th>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>

            <tbody>
                {data.length > 0 ? (
                    filteredData.map((d, index) => {
                    return (
                        <tr className=" border-b cursor-pointer bg-gray-900 border-gray-700 hover:bg-gray-800" key={d._id}>
        
                            <th className="px-6 py-2">{index + 1}</th>
        
                            <td className="px-6 py-2 text-white">
                            {d.title}
                            </td>

                            <td className="px-6 py-2">
                                <div className='w-[300px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                    <p className='m-0'>{d.content}</p>
                                </div>
                            </td>
        
                            <td className="px-6 py-2">
                            {d.img_url ? (
                                <img className='w-32 h-auto' src={d.img_url} alt={d.title} />
                            ) : (
                                <p>No image</p>
                            )}
                            </td>
                            
                            <td className="px-6 py-2">
                                <div className='flex gap-4 items-center'>
                                    <a href={`/update-portfolio/${d._id}`}>
                                    <BiSolidMessageEdit 
                                    className="hover:text-blue-500" size={20} />
                                    </a>
                                    |
                                    <RiDeleteBin6Fill className="hover:text-red-600" onClick={(e) => handleItemDelete(e, d._id, d.fb_url)} size={20} />
                                </div>
                            </td>
                        </tr>
                    )})
                ) : (
                    <tr>
                        <td className='py-2 px-4'>No Portfolio</td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPortfolios;