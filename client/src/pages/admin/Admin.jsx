import React, { useEffect, useState } from 'react'
import { DeleteOneItem, getItems } from '../../services';
import { deleteFile } from '../../firebase';
import { FaPlus } from 'react-icons/fa';
import { BiSolidMessageEdit } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function Admin() {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getItems().then(data => {
        setItems(data);
    })
  }, [])

  const handleItemDelete = async (event, id, fb_url) => {
    event.stopPropagation();

    try {
      deleteFile(fb_url);
      await DeleteOneItem(id);

      setItems(prev => 
        prev.filter(item => item._id != id)
      );
    } catch (error) {
      alert("An error occurred while deleting the item: " + error.message);
    }
  };

  const filteredData = items.filter((item) => {
    const nameMatch = item.title.toLowerCase().includes(searchInput.toLowerCase());
  
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
            <p className='font-bold text-xl tracking-wider'>Items</p>

            <a href='/create-item' className='adminButton'>
                <FaPlus /> Item
            </a>                  
        </div>

        <table className="w-full mt-4 shadow-xl text-left text-gray-200">
            <thead className=" bg-gray-700 text-gray-300">
                <tr>
                    <th scope="col" className="px-6 py-3">No</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Position</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>

            <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => {
                  return (
                      <tr className=" border-b cursor-pointer bg-gray-900 border-gray-700 hover:bg-gray-800" key={item._id}>
  
                          <th className="px-6 py-2">{index + 1}</th>
  
                          <th scope="row" className="px-6 py-2 font-medium text-white">
                          {item.title}
                          </th>
  
                          <td scope="row" className="px-6 py-2 font-medium text-white">
                          {item.position}
                          </td>
  
                          <td className="px-6 py-2">
                              <div className='w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                  <p className='m-0'>{item.description}</p>
                              </div>
                          </td>
  
                          <td className="px-6 py-2">
                            {item.img_url ? (
                              <img className='w-28 h-auto' src={item.img_url} alt={item.title} />
                            ) : (
                              <p>No image</p>
                            )}
                          </td>
                          
                          <td className="px-6 py-2">
                              <div className='flex gap-4 items-center'>
                                  <a href={`/update-item/${item._id}`}>
                                  <BiSolidMessageEdit 
                                  className="hover:text-blue-500" size={20} />
                                  </a>
                                  |
                                  <RiDeleteBin6Fill className="hover:text-red-600" onClick={(e) => handleItemDelete(e, item._id, item.fb_url)} size={20} />
                              </div>
                          </td>
                      </tr>
                  );
                  })
                ) : (
                  <tr><td className='py-2 px-4'>No Item</td></tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin