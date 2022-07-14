import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../Assets/Images/logo.svg'

function RincianPembayaran() {
    return (
        <div>
            <div className='p-16 pr-0 bg-white'>
                <h1 className='text-4xl font-bold'>Rincian Pembayaran</h1>
                <p>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>


                <div className='md:flex  '>
                    <div className='p-2 rounded-md border-red-600 border-1 md:w-1/2 md:mr-14 py-14' >
                        <div className='flex justify-between md:pt-14 pb-6'>
                            <img src={logo} className='px-2' /> <h2 className='text-lg md:text-2xl md:px-2'>Paket Bimbingan Regular</h2>
                        </div>

                        <p className='p-2 text-sm'>Paket Bimbingan Kelas Semua Mata Pelajaran (Matematika, Bahasa Indonesia, Ilmu Pengetahuan Alam) dengan fasilitas :</p>
                        <ul className=''>
                            <li className='list-disc'>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
                            <li className='list-disc'>Harga Terjangkau hanya Rp. 400.000,-/bulan</li>
                            <li className='list-disc'>Pertemuan 12x/bulan</li>
                            <li className='list-disc'>Biaya Pendaftaran 1x untuk selamanya</li>
                        </ul>
                    </div>
                    <div className='pt-4'>
                        <div className='mb-16 pb-10'>
                            <h4 className='text-xl md:text-xl'>Pembayaran : 1 Bulan</h4>
                            <h4 className='text-xl md:text-xl'>Biaya Paket Bimbingan/Bulan : Rp. 400.000,-</h4>
                            <h4 className='text-xl md:text-xl'>Biaya Pendaftaran : Rp. 200.000,-</h4>
                            <h4 className='text-xl md:text-xl'>Total : Rp. 600.000,-</h4>

                        </div>
                        <div className='pt-16 mt-10'>
                            <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Bayar Sekarang</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RincianPembayaran