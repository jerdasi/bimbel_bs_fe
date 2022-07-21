import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'

function RincianPembayaran() {
    const { state } = useLocation()
    const { id_paket, id_grup, redirectUrl} = state
    const [rincian, setRincian] = useState({})
    const [pembayaran, setPembayaran] = useState({})

    useEffect(() => {
        axios   
            .get(`${process.env.REACT_APP_API}/paket-bimbingan/${id_paket}`)
            .then((res) => setRincian(res.data.data))
        
        axios
            .get(`${process.env.REACT_APP_API}/pendaftaran`)
            .then((res) => setPembayaran(res.data.data))

    }, [])

    return (
        <div>
            <div className='p-16 pr-0 bg-white'>
                <h1 className='text-4xl font-bold'>Rincian Pembayaran</h1>
                <p>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>


                <div className='md:flex  '>
                    <div className='p-2 mr-14 rounded-md border-red-600 border-1 md:w-3/4 md:mr-14 py-14' >
                        <div className='flex justify-between md:pt-14 pb-6'>
                            <img src={logo} className='px-2' /> <h2 className='text-md md:text-lg md:px-2'>Paket Bimbingan Regular</h2>
                        </div>

                        <p className='p-2 text-sm'>{rincian.nama_paket}</p>
                        <ul className=''>
                            <li className='list-disc'>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
                            <li className='list-disc'>Harga Terjangkau hanya Rp. {rincian.harga},-/bulan</li>
                            <li className='list-disc'>Pertemuan {rincian.jumlah_pertemuan}x/minggu</li>
                            <li className='list-disc'>Biaya Pendaftaran 1x untuk selamanya</li>
                        </ul>
                    </div>
                    <div className='pt-4 w-full'>
                        <div className='mb-16 pb-10'>
                            <h4 className='text-xl md:text-xl'>Pembayaran : 1 Bulan</h4>
                            <h4 className='text-xl md:text-xl'>Biaya Paket Bimbingan/Bulan : Rp. {rincian.harga},-</h4>
                            <h4 className='text-xl md:text-xl'>Biaya Pendaftaran : Rp. 200000,-</h4>
                            <h4 className='text-xl md:text-xl'>Total : Rp. {rincian.harga + 200000} ,-</h4>

                        </div>
                        <div className='pt-16 mt-10 mr-16'>
                            <button 
                            onClick={() => {
                                window.open(redirectUrl)
                            }}
                            className='p-2 w-full bg-merah-bs text-white font-bold md:text-sm rounded-md my-2 '>Bayar Sekarang</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RincianPembayaran