import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import register from '../../Assets/Images/register.png'
import {TbLocation} from 'react-icons/tb'

function FormRegistManual(props) {

    const [paket, setPaket] = useState([])
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        navigate('/review-pendaftaran')
        //link url ke midtrans gunakan cara ini
        //window.open('https://google.com')
        //window.history.pushState({},'','https://google.com')
    }
    

    useEffect(() => {
        
        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan`)
            .then((res) => setPaket(res.data.data));
    })
    return (
        <form onSubmit={handleSubmit} method='POST'> 

            <h2 className='font-bold'>Kelas <span className='text-merah-bs'>{props.title}</span></h2>
            <p>Bimbingan Belajar bagi anak {props.title} bertujuan untuk membantu siswa {props.akro} dapat belajar dengan efektif dan efisien, mencapai perkembangan optimal dan mengembangkan kebiasaan belajar yang baik dalam menguasai pengetahuan, keterampilan serta menyiapkan untuk melanjutkan pendidikan pada tingkat yang lebih tinggi. Dengan mengikuti Bimbingan Kelas ini, anak didik akan diajarkan metode / cara yang cepat, efisien dalam menyelesaikan soal - soal yang ada.</p>
            <div>

                
                <div>
                    <h3 className='font-bold'>Pilihan <span className='text-merah-bs '>Paket Bimbingan Belajar</span></h3>
                    <ul className='flex overflow-x-auto'>
                    {paket.map((item) => {
                        return (
                            <li key={item.id} className='w-full px-8 border-2 rounded-md border-red-600 mx-2'>
                                <div className='flex justify-between py-2'>
                                    <img src={logo} className='w-[60px]'/>
                                    <h4 className='text-sm font-bold py-2'> {item.nama_paket} </h4>
                                </div>
                                
                                <p> {item.deskripsi} </p>
                                <ul className='text-sm'>
                                    <li>{item.deskripsi}</li>
                                    <li>{item.jumlah_pertemuan}</li>
                                    <li>{item.harga}</li>
                                </ul>
                                <button className='w-full flex mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'><TbLocation/>Pilih Kelas Ini</button>
                            </li>
                        )
                    })}
                    </ul>
                    
                </div>

                <h3>Informasi Umum</h3>
                <div className='mx-auto w-full flex justify-between' >
                    <div className='w-full'>
                        <div>
                            <label className='text-md font-light py-1'>Nama Lengkap</label>
                            <br />
                            <input type='text' placeholder='Nama Lengkap Peserta Didik'
                                className='w-full md:w-full p-2 pr-8 border-1 rounded-md text-sm font-light hover:border-red-500' ></input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Tempat, Tanggal Lahir</label>
                            <br />
                            <input type='text' placeholder='Tempat Tanggal Lahir Peserta Didik'
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Alamat</label>
                            <br />
                            <input type='text' placeholder='Alamat Peserta Didik' className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Asal Sekolah</label>
                            <br />
                            <input type='text' placeholder='Asal Sekolah Peserta Didik' className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div className='w-full flex justify-start'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>Nama Ayah</label>
                                <br />
                                <input type='text' placeholder='Nama Ayah Peserta Didik' className='w-full p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>Pekerjaan Ayah</label>
                                <br />
                                <input type='text' placeholder='Pilih Salah Satu' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                            </div>
                        </div>
                        <div className='w-full flex mx-auto'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>Nama Ibu</label>
                                <br />
                                <input type='text' placeholder='Nama Ibu Peserta Didik' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>Pekerjaan Ibu</label>
                                <br />
                                <input type='text' placeholder='Pilih Salah Satu' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>No. HP Ayah</label>
                                <br />
                                <input type='text' placeholder='No Handphone Ayah Peserta Didik' className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>No. HP Ibu</label>
                                <br />
                                <input type='text' placeholder='No Handphone Ibu Peserta Didik'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>

                    </div>
                    <img src={register} className='hidden lg:flex lg:w-[40%] lg:h-[30%] lg:p-30 lg:m-14' />
                </div>


                <div>
                    <label className='text-md font-light py-1'>Upload Foto *Rapi dan Formal</label>
                    <br />
                    <input type='file' placeholder='Pilih Salah Satu' className='pt-2 pb-4 font-light' />
                </div>
                <div>
                    <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Daftar</button>
                </div>
            </div>
        </form>
    )
}

export default FormRegistManual