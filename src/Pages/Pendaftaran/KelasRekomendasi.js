import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from '../../Assets/Images/logo.svg'
import {TbLocation} from 'react-icons/tb'

function KelasRekomendasi() {

    const [paket, setPaket] = useState([])

    useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan`)
            .then((res) => setPaket(res.data.data));
    })
    return (
        <div className='p-16'>
            <div className='w-full  md:w-[70%]'>
                <h1 className='font-bold text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan</h1>
                <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div>
                <h2>Rekomendasi Kelas</h2>
                <p>Berdasarkan data yang kamu berikan, kami melakukan analisis untuk memberikan kamu rekomendasi paket bimbingan belajar agar kamu tidak bingung untuk memilih yah! Pilih atau Abaikan dan Tetap Semangat Belajar nya ya!</p>
                <div className='p-2 mr-14 rounded-md border-red-600 border-1 md:w-1/3 md:mr-14 py-14' >
                    <div className='flex justify-between md:pt-14 pb-6'>
                        <img src={logo} className='px-2' /> <h2 className='text-lg md:text-xl md:px-2'>Paket Bimbingan Regular</h2>
                    </div>

                    <p className='p-2 text-sm'>Paket Bimbingan Kelas Semua Mata Pelajaran (Matematika, Bahasa Indonesia, Ilmu Pengetahuan Alam) dengan fasilitas :</p>
                    <ul className=''>
                        <li className='list-disc'>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
                        <li className='list-disc'>Harga Terjangkau hanya Rp. 400.000,-/bulan</li>
                        <li className='list-disc'>Pertemuan 12x/bulan</li>
                        <li className='list-disc'>Biaya Pendaftaran 1x untuk selamanya</li>
                    </ul>
                </div>
            </div>
            <div className='w-full'>
                <h2>Kelas Lainnya</h2>
                <ul className='w-full flex overflow-x-auto'>
                    {paket.map((item) => {
                        return (
                            <li key={item.id}
                                className='w-full px-8 border-2 rounded-md border-red-600 mx-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                <div className='flex justify-between py-2'>
                                    <img src={logo} className='w-[60px]' />
                                    <h4 className='text-sm font-bold py-2'> {item.nama_paket} </h4>
                                </div>

                                <p> {item.deskripsi} </p>
                                <ul className='text-sm'>
                                    <li>{item.deskripsi}</li>
                                    <li>{item.jumlah_pertemuan}</li>
                                    <li>{item.harga}</li>
                                </ul>
                                <button className='w-full flex mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'><TbLocation />Pilih Kelas Ini</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Lanjutkan Pendaftaran</button>
            </div>
        </div>
    )
}

export default KelasRekomendasi