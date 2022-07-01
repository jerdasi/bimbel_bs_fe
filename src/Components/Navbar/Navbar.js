import React from 'react'
import './Navbar.css'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Images/logo.svg'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='contentNavbar'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='menu'>
                <ul>
                    <li><a href='/' >Beranda</a></li>
                    <li><a href='/testimoni'>Testimoni</a></li>
                    <li><a href='/paket-bimbingan'>Paket Bimbingan</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><button>Daftar</button></li>
                </ul>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default Navbar