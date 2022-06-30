import React from 'react'
import logo from '../../Images/logo.svg'
import fb from '../../Images/akar-icons_facebook-fill.svg'
import ig from '../../Images/akar-icons_instagram-fill.svg'
import wa from '../../Images/akar-icons_whatsapp-fill.svg'
import email from '../../Images/ic_baseline-mark-email-unread.svg'
import arrow from '../../Images/iconoir_maps-arrow-diagonal.svg'
import '../Footer/Footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='contentFooter'>
            <div className='logo'><img src={logo}/></div>
            <div className='contact'>
                <p>Ikuti Beta Smart di media sosial <img src={fb} className='iconSocmed' /><img src={ig} className='iconSocmed' />
                Hubungi Beta Smart di <img src={email} className='iconSocmed' /><img src={wa} className='iconSocmed' /></p>
            </div>
            <div><button className='button'><img src={arrow} className='iconSocmed'/>Lihat Alamat di Gmaps</button></div>
        </div>
    </div>
    </>
  )
}

export default Footer