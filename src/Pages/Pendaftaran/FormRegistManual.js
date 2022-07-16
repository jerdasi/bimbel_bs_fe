import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import regist from '../../Assets/Images/register.png'
import { TbLocation } from 'react-icons/tb'

function FormRegistManual(props) {

    const [paket, setPaket] = useState([])
    const navigate = useNavigate()
    const [idKelas, setIdKelas] = useState('')


    /*const [register, handleSubmit] = useForm()
    const onSubmit = data =>{
        console.log(data)
    }*/

    const [formValues, setFormValues] = useState({
        nama: "",
        tempat: "",
        tanggal_lahir: moment().format("yyyy-MM-DD"),
        alamat: "",
        id_jenjang: 0,
        asal_sekolah: "",
        fotoPeserta: null,
        nama_ayah: "",
        nama_ibu: "",
        telepon_anak: "",
        telepon_ayah: "",
        telepon_ibu: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        let form_data = new FormData()

        for (let key in formValues) {
            console.log(key, formValues[key])
            form_data.append(key, formValues[key])

        }
        axios
            .post(`${process.env.REACT_APP_API}/peserta-didik`,
                form_data,
                config)
            .then((res) => {
                // console.log(res.data.data.id)
                console.log({ id: res.data.data.id, id_paket: idKelas})
                navigate(`/review-pendaftaran`, { state: { id: res.data.data.id, id_paket: idKelas} })
            }).catch(err => console.log(err.message))

    }



    //const handleSubmit = (e) => {
    // e.preventDefault()
    //navigate('/review-pendaftaran')
    //link url ke midtrans gunakan cara ini
    //window.open('https://google.com')
    //window.history.pushState({},'','https://google.com')
    //}


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan`)
            .then((res) => setPaket(res.data.data));
        setFormValues({ ...formValues, id_jenjang: props.kelas })
    }, [])
    return (
        <>
            <h2 className='font-bold'>Kelas <span className='text-merah-bs'>{props.title}</span></h2>
            <p>Bimbingan Belajar bagi anak {props.title} bertujuan untuk membantu siswa {props.akro} dapat belajar dengan efektif dan efisien, mencapai perkembangan optimal dan mengembangkan kebiasaan belajar yang baik dalam menguasai pengetahuan, keterampilan serta menyiapkan untuk melanjutkan pendidikan pada tingkat yang lebih tinggi. Dengan mengikuti Bimbingan Kelas ini, anak didik akan diajarkan metode / cara yang cepat, efisien dalam menyelesaikan soal - soal yang ada.</p>
            <div>
                <div>
                    <h3 className='font-bold'>Pilihan <span className='text-merah-bs '>Paket Bimbingan Belajar</span></h3>
                    <ul className='w-full flex overflow-x-auto'>
                        {paket.filter(kelas => kelas.id_jenjang === props.kelas).map((paketKelas) => {
                            return (
                                <li key={paketKelas.id}
                                    onClick={()=>{setIdKelas(paketKelas.id)}}
                                    className='w-full px-8 border-2 rounded-md border-red-600 mx-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                    <div className='flex justify-between py-2'>
                                        <img src={logo} className='w-[60px]' />
                                        <h4 className='text-sm font-bold py-2'> {paketKelas.nama_paket} </h4>
                                    </div>

                                    <p> {paketKelas.deskripsi} </p>
                                    <ul className='text-sm'>
                                        <li>{paketKelas.deskripsi}</li>
                                        <li>{paketKelas.jumlah_pertemuan}</li>
                                        <li>{paketKelas.harga}</li>
                                    </ul>
                                    <button className='w-full flex mt-1 p-2  px-6 justify-between items-center text-white font-bold bg-merah-bs rounded-md'><TbLocation />Pilih Kelas Ini</button>
                                </li>
                            )
                        })}

                    </ul>

                </div>


                <h3>Informasi Umum</h3>
            </div>

            <form method='POST' onSubmit={handleSubmit}>
                <div className='mx-auto w-full flex justify-between' >
                    <div className='w-full'>
                        <div>
                            <label className='text-md font-light py-1'>Nama Lengkap</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Nama Lengkap Peserta Didik'
                                value={formValues.nama}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        nama: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 pr-8 border-1 rounded-md text-sm font-light hover:border-red-500' ></input>
                        </div>
                        <div className='w-full flex justify-start'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>Tempat Lahir</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Tempat Lahir Peserta Didik'
                                    value={formValues.tempat}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            tempat: e.target.value
                                        })
                                    }}
                                    className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                            </div>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'> Tanggal Lahir</label>
                                <br />
                                <input
                                    type='date'
                                    name='tanggal_siswa'
                                    defaultValue={moment(
                                        formValues.tanggal_lahir
                                    ).format("yyyy-MM-DD")}
                                    value={moment(
                                        formValues.tanggal_lahir
                                    ).format("yyyy-MM-DD")}
                                    onChange={(e) =>
                                        setFormValues({
                                            ...formValues,
                                            tanggal_lahir: moment(
                                                e.target.value
                                            ).format("yyyy-MM-DD"),
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Alamat</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Alamat Peserta Didik'
                                value={formValues.alamat}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        alamat: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Asal Sekolah</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Asal Sekolah Peserta Didik'
                                value={formValues.asal_sekolah}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        asal_sekolah: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div className='w-full flex justify-start'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>Nama Ayah</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Nama Ayah Peserta Didik'
                                    value={formValues.nama_ayah}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            nama_ayah: e.target.value
                                        })
                                    }}
                                    className='w-full p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>Nama Ibu</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Nama Ibu'
                                    value={formValues.nama_ibu}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            nama_ibu: e.target.value
                                        })
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                            </div>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>No. HP Anak</label>
                            <br />
                            <input
                                type='text'
                                placeholder='Asal Sekolah Peserta Didik'
                                value={formValues.telepon_anak}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        telepon_anak: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>No. HP Ayah</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='No Handphone Ayah Peserta Didik'
                                    value={formValues.telepon_ayah}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            telepon_ayah: e.target.value
                                        })
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>No. HP Ibu</label>
                                <br />
                                <input
                                    type='text'
                                    placeholder='No Handphone Ibu Peserta Didik'
                                    value={formValues.telepon_ibu}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            telepon_ibu: e.target.value
                                        })
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>

                    </div>
                    <img src={regist} className='hidden lg:flex lg:w-[40%] lg:h-[30%] lg:p-30 lg:m-14' />
                </div>


                <div>
                    <label className='text-md font-light py-1'>Upload Foto *Rapi dan Formal</label>
                    <br />
                    <input
                        type='file'
                        placeholder='Pilih Salah Satu'
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                fotoPeserta: e.target.files[0],
                            })
                        }
                        className='pt-2 pb-4 font-light' />
                </div>
                <div>
                    <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Daftar</button>
                </div>


            </form>

        </>
    )
}

export default FormRegistManual