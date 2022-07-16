import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { set } from 'react-hook-form'
import { BsSearch } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import insignia from '../../Assets/Images/insignia.png'
import logo from '../../Assets/Images/logo.svg'

function ReviewPendaftaran() {
  const { state } = useLocation()
  const {id, id_paket } = state;
  const [review, setReview] = useState({})
  const [paket, setPaket] = useState([])
  const [grup, setGrup] = useState([])
  const [idGrup, setIdGrup] = useState('')
  const navigate = useNavigate()
  const [pendaftaran, setPendaftaran] = useState({
    id_siswa:id,
    id_grup:0,
    total_pembayaran:200000,
    tanggal_pendaftaran: new Date()
  })

  const handleDaftar = (e) =>{
    e.preventDefault()
       
    axios 
      .post(`${process.env.REACT_APP_API}/pendaftaran/pendaftaran-midtrans`,pendaftaran)
      .then((res) => {
        navigate(`/rincian-pembayaran`,{ state: { id_paket: id_paket, id_grup: idGrup, redirectUrl: res.data.data.redirectUrl }})
      })
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/peserta-didik/${id}`)
      .then((res) => setReview(res.data.data))

    axios
      .get(`${process.env.REACT_APP_API}/paket-bimbingan/${id_paket}`)
      .then((res) => {
        setPendaftaran({...pendaftaran, total_pembayaran:res.data.data.harga + pendaftaran.total_pembayaran})
        setPaket(res.data.data)})
    
    axios 
      .get(`${process.env.REACT_APP_API}/grup-bimbel`)
      .then((res) => setGrup(res.data.data))
    console.log(id, id_paket)
  }, [])
  return (
    <div className='p-16'>

      <h1 className='text-2xl md:text-5xl font-bold'><span className='text-merah-bs'>Review</span> Pendaftaran</h1>
      <p>Ayo pastikan terlebih dahulu data yang telah diisi, agar informasi nya valid yah!</p>

      <h3>Informasi Calon Peserta Didik</h3>
      <div className='flex justify-start'>
        <div className='w-1/3 p-2 border-2 border-red-600 rounded-md max-h-72'>
          <img src={`${process.env.REACT_APP_API}/${review.foto}`} className='p-2 w-1/2  mx-auto' />
          <button className='flex  p-2 w-full bg-merah-bs text-white md:text-lg rounded-md my-2'><BsSearch size={20} className='my-1' /> <span className='mx-auto'>Preview</span></button>

        </div>
        <div className='px-16'>
          <div>
            <h5>Nama Lengkap</h5>
            <span className='font-light'>{review.nama}</span>
          </div>
          <div>
            <h5>Tempat, Tanggal Lahir</h5>
            <span className='font-light'>{review.tempat} {review.tanggal_siswa}</span>
          </div>
          <div>
            <h5>Alamat</h5>
            <span className='font-light'>{review.alamat}</span>
          </div>
          <div>
            <h5>Asal Sekolah</h5>
            <span className='font-light'>{review.asal_sekolah}</span>
          </div>
          <div>
            <h5>Nama Ayah</h5>
            <span className='font-light'>{review.nama_ayah}</span>
          </div>
          <div>
            <h5>Nama Ibu</h5>
            <span className='font-light'>{review.nama_ibu}</span>
          </div>
          <div>
            <h5>Telepon Ayah</h5>
            <span className='font-light'>{review.telepon_ayah}</span>
          </div>
          <div>
            <h5>Telepon Ibu</h5>
            <span className='font-light'>{review.telepon_ibu}</span>
          </div>
          <div>
            <h5>Telepon Anak</h5>
            <span className='font-light'>{review.telepon_anak}</span>
          </div>
        </div>

      </div>

      <div>
        <h3>Paket yang <span className='text-merah-bs'>dipilih</span></h3>
        <div className='p-2 mr-14 rounded-md border-red-600 border-1 md:w-1/3 md:mr-14 py-14' >
          <div className='flex justify-between md:pt-14 pb-6'>
            <img src={logo} className='px-2' /> <h2 className='text-lg md:text-xl md:px-2 mx-auto'>{paket.nama_paket}</h2>
          </div>

          <p className='p-2 text-md'>{paket.deskripsi}</p>
          <ul className=''>
            <li className='list-disc'>Kapasitas Kelas Hingga 20 Orang/pertemuan</li>
            <li className='list-disc'>Harga Terjangkau hanya Rp. {paket.harga},-/bulan</li>
            <li className='list-disc'>Pertemuan {paket.jumlah_pertemuan}x/bulan</li>
            <li className='list-disc'>Biaya Pendaftaran 1x untuk selamanya</li>
          </ul>
        </div>
        <div className='cursor-pointer p-4'>

        {grup.filter(item => item.id_paket === id_paket).map((item) => {
            return(
              <li
              key={item.id}
              onClick={() => {
                setPendaftaran({
                  ...pendaftaran,
                  id_grup: item.id
                })
                console.log(item.id)
              }}>{item.nama_grup} - {item.kuota}</li>
            )
          })}
        </div>

        <div>
          <input type='checkbox' />Saya setuju untuk mengikuti segala aturan dan ketentuan yang berlaku di Bimbingan Belajar Beta Smart
          <div className='flex gap-2'>
            <button className='w-1/2  mt-1 p-2  px-6 justify-between items-center border-2 border-gray-600 font-bold rounded-md'>Kembali</button>
            <button 
            onClick={(e) => handleDaftar(e)}
            className='w-1/2 mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'>Lanjutkan dan Bayar </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ReviewPendaftaran