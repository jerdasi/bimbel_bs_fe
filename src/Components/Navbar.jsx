import React, {useState} from 'react'
import logo from '../Assets/Images/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className=' w-full h-24 flex justify-between items-center bg-antique mx-auto px-4 lg:px-20 '>
        <img src={logo} alt="" className='' />
        <ul className='hidden md:flex'>
            <li className='p-4'>Beranda</li>
            <li className='p-4'>Testimoni</li>
            <li className='p-4'>Paket Bimbingan</li>
            <li className='p-4'>FAQ</li>
            <li><button className='py-2 px-4 mt-3 bg-merah-bs text-white rounded-lg'>Daftar</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
            
        </div>
        <div className={ !nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-400 bg-antique ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'} >
            <img src={logo} alt="" className='p-4'  />
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-300'>Beranda</li>
                <li className='p-4 border-b border-gray-300'>Testimoni</li>
                <li className='p-4 border-b border-gray-300'>Paket Bimbingan</li>
                <li className='p-4 border-b border-gray-300'>Faq</li>
                <li className='p-4 border-b border-gray-300'>Daftar</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar