import React from 'react'
import logo from '../Assets/Images/logo.svg'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import {MdMarkEmailUnread} from 'react-icons/md'
import {TbLocation} from 'react-icons/tb'

function Footer() {
  return (
    <div className='w-full bg-white'>
        <div className='w-full flex justify-between py-4 h-24'>
            <img src={logo}/>
            <div className=''>
                <p className='my-0 flex flex-row'>Ikuti Beta Smart di media sosial<span><BsFacebook/><BsInstagram/></span></p>
                <p className='my-0 flex flex-row'>Hubungi Beta Smart di <MdMarkEmailUnread/><BsWhatsapp/> </p>
            </div>
            <button><TbLocation/>Lihat Alamat di GMaps</button>
        </div>
    </div>
  )
}

export default Footer