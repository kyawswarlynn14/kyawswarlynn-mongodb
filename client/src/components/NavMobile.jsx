import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseCircleFill } from "react-icons/ri";
import {AiFillHome} from 'react-icons/ai'
import {FaLaptopCode, FaBlog, FaCertificate} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import {CgMenuBoxed} from 'react-icons/cg'

export default function NavMobile() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <div>
            <div
            onClick={openModal}
            className="flex items-center md:hidden mr-2"
            >
            <CgMenuBoxed className="text-3xl " />
            </div>
        </div>

        <Dialog open={isOpen} as="div" className="relative z-40 md:hidden" onClose={closeModal}>
            
            <div className="fixed inset-0 bg-black bg-opacity-40" />

            <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative mr-auto flex h-full w-80 flex-col overflow-y-auto bg-slate-800 py-4 pb-6 shadow-xl rounded-r-lg">

                <div className="flex items-center justify-end px-4" onClick={closeModal}>
                    <RiCloseCircleFill className='text-2xl text-white' />
                </div>

                <nav className="flex flex-col mt-4 mx-6 gap-4">
                    <a
                    href="/#home"
                    className="mobileNavButton"
                    onClick={closeModal}
                    >
                    <AiFillHome /> HOME
                    </a>

                    <a
                    href="#services"
                    className="mobileNavButton"
                    onClick={closeModal}
                    >
                    <FaLaptopCode /> SERVICES
                    </a>

                    <a
                    href="#portfolio"
                    className="mobileNavButton"
                    onClick={closeModal}
                    >
                    <BsPersonWorkspace /> PORTFOLIO
                    </a>

                    <a
                      href="#certificates"
                      className="bg-white p-2 px-4 rounded-lg flex items-center gap-2"
                      onClick={closeModal}
                    >
                      <FaCertificate className='text-xl'/> CERTIFICATES
                    </a>

                    <a
                    href="#blog"
                    className="mobileNavButton"
                    onClick={closeModal}
                    >
                    <FaBlog /> BLOG
                    </a>
                </nav>

                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}
