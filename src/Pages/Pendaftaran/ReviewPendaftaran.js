import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { BsSearch } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import insignia from '../../Assets/Images/insignia.png'
import logo from '../../Assets/Images/logo.svg'

function ReviewPendaftaran() {
  const state = useLocation()
  const {id, id_paket } = state;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/peserta-didik/`)  
    console.log(id, id_paket)
  })
  return (
    <div className='p-16'>

      <h1 className='text-2xl md:text-5xl font-bold'><span className='text-merah-bs'>Review</span> Pendaftaran</h1>
      <p>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>

      <h3>Informasi Calon Peserta Didik</h3>
      <div className='flex justify-start'>
        <div className='w-1/3 p-2 border-2 border-red-600 rounded-md max-h-72'>
          <img src={insignia} className='p-2 w-1/2  mx-auto' />
          <button className='flex  p-2 w-full bg-merah-bs text-white md:text-lg rounded-md my-2'><BsSearch size={20} className='my-1' /> <span className='mx-auto'>Preview</span></button>

        </div>
        <div className='px-16'>
          <div>
            <h5>Nama Lengkap</h5>
            <span className='font-light'>Nama</span>
          </div>
          <div>
            <h5>Tempat, Tanggal Lahir</h5>
            <span className='font-light'>Nama</span>
          </div>
          <div>
            <h5>Alamat</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Asal Sekolah</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Nama Ayah</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Nama Ibu</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Telepon Ayah</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Telepon Ibu</h5>
            <span className='font-light'>text</span>
          </div>
          <div>
            <h5>Telepon Anak</h5>
            <span className='font-light'>text</span>
          </div>
        </div>

      </div>

      <div>
        <h3>Paket yang <span className='text-merah-bs'>dipilih</span></h3>
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

    </div>
  )
}

export default ReviewPendaftaran