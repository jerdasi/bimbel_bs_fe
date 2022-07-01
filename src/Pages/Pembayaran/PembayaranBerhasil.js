import React from 'react'
import image from '../../Images/pembayaran.png'
import './PembayaranBerhasil.css'

function PembayaranBerhasil() {
  return (
    <div className='berhasil'>
        
        <img src={image}/>
        <h1>Selamat Pembayaran Kamu Telah Berhasil</h1>
        <h3>Terimakasih Telah Bergabung di Bimbingan Belajar Beta Smart</h3>
        
    </div>
  )
}

export default PembayaranBerhasil