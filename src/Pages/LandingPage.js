import React, { useState, useEffect } from 'react'
import hero from '../Assets/Images/hero.png'
import whyus from '../Assets/Images/whyus.png'
import insignia from '../Assets/Images/insignia.png'
import book from '../Assets/Images/book.svg'
import whyusjson from '../Components/json/whyus.json'
import testimoni from '../Components/json/testimoni.json'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import axios from 'axios'


function LandingPage() {
  const [jenjang, setJenjang] = useState([])

  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
        .then((res) => setJenjang(res.data.data));
  })

  return (
    <>
      <div className='w-full  py-32 px-16 mx-auto bg-white'>
        <div className=' mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-merah-bs font-bold text-4xl py-2 md:text-5xl sm:py-1'>Beta Smart</h1>
            <h3 className='font-bold text-2xl text-merah-bs pb-2 md:text-3xl'>Quality <span className='text-black'>More Than </span> Quantity</h3>
            <p>Merupakan Bimbingan Belajar berbasis Private atau Reguler yang berdiri di Berau, Kalimantan Timur sejak 27 Agustus 2016. Dengan metode pembelajaran “DARE TO GREAT” oleh pengajar pengajar profesional yang menghasilkan siswa-siswa optimis, cerdas dan berprestasi. Ayo pilih kelasmu atau gunakan fitur rekomendasi untuk memudahkan menemukan kelas yang tepat</p>
            <div className='lg:flex '>
              <button className='w-[100%] lg:mt-2 lg:w-[45%] p-2 bg-merah-bs rounded-xl text-white mx-1'>Pilih Kelas</button>
              <button className='w-[100%]  mt-2  lg:w-[45%] p-2 rounded-xl border-2 border-red-600 mx-1'>Rekomendasi Kelas</button>
            </div>

          </div>
          <img src={hero} className='px-2 mx-auto' />
        </div>

      </div>
      <div className='px-10 py-16 mx-auto bg-antique' >
        <h1 className='font-bold text-3xl'>Daftar dan Mulai Belajar</h1>
        <p className='pb-2'>Pilih sendiri atau ikuti rekomendasi kami</p>
        <div className=''>
          <ul className='flex flex-row justify-start overflow-x-auto h-1/2'>
            <li className='w-1/4 p-2 mx-1 md:p-4 md:w-[200px] text-center md:mx-0 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-105 ease-in-out duration-300 justify-center'>
              <img src={insignia} className='w-[90px] mx-auto pt-4'/>
              <h4 className='text-sm mt-10' >Rekomendasi</h4>
            </li>
            {jenjang.map((item) => {
              return (
                <li key={item.id} className='w-1/4  px-4 py-2 md:p-4 md:w-[200px] text-center mx-1 md:mx-0 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-105 ease-in-out duration-300 justify-center '>
                  <img src={book} className='w-[90px] mx-auto pt-4' />
                  <h4 className='text-sm bottom-0 mt-10 w-full'>{item.akronim}</h4>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='bg-white px-10 py-16 mx-auto'>
        <h1 className='font-bold text-3xl text-center py-4'>Kenapa Harus Bimbel <span className='text-merah-bs'>Beta Smart</span> ?</h1>
        <div className=' mx-auto grid md:grid-cols-2'>
          <img src={whyus}></img>
          <div>
            <p className='text-center'>Beta Smart sebagai penyedia jasa bimbingan belajar, menawarkan beberapa keuntungan yang dapat membantu anak didik dapat belajar dengan baik dan menjadi siswa berprestasi di sekolahnya</p>
            <div className='flex flex-wrap'>

              {whyusjson.map((item, index) => {
                return (
                  <div className='w-full md:w-1/2 border-2 border-red-500 rounded-md my-2  bg-merah-bs items-center '>
                    <div className='py-1 px-2 text-white '>
                      <h3 className='text-lg md:text-sm'>{item.title}</h3></div>
                    <div className='bg-white p-2 rounded-sm'>
                      {item.res}
                    </div>
                  </div>

                )
              })}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-10 py-16 mx-auto bg-antique'>
        <h1>Kisah Sukses </h1>
        <p>Bergabung dengan Beta Smart bukan pilihan yang salah. Ikuti jejak mereka!</p>
        <div className='md:flex'>
          {testimoni.map((item, index) => {
            return (
              <div className='w-full lg:w-1/2 bg-white p-4 my-2 items-center text-center justify-center rounded-xl mr-2'>
                <img src={item.image} className='mx-auto' />
                <h1 className='py-4'>{item.nama} - {item.paket}</h1>
                <p className='text-left'>{item.ulasan}</p>
              </div>
            )
          })}
        </div>
        <div className='flex p-2'>
          <BsArrowLeft size={30} />
          <BsArrowRight size={30} />
        </div>
      </div>

    </>
  )
}

export default LandingPage