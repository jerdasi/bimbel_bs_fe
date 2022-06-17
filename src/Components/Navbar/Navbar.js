import React from 'react'
import '../Navbar/Navbar.css'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Images/logo.svg'

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
                    <li><a href='#'>Beranda</a></li>
                    <li>Testimoni</li>
                    <li>Paket Bimbingan</li>
                    <li>FAQ</li>
                    <li><button>Daftar</button></li>
                </ul>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default Navbar