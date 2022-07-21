import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import validation from '../../Components/validation'
import logo from '../../Assets/Images/logo.svg'
import regist from '../../Assets/Images/register.png'
import { TbLocation } from 'react-icons/tb'

function FormRegistManual(props) {

    const [paket, setPaket] = useState([])
    const navigate = useNavigate()
    const [idKelas, setIdKelas] = useState('')
    const [errors, setErrors] = useState({})


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
        setErrors(validation(formValues))

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
                console.log({ id: res.data.data.id, id_paket: idKelas })
                navigate(`/review-pendaftaran`, { state: { id: res.data.data.id, id_paket: idKelas } })
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
            <h2 className='font-bold text-md md:text-2xl pt-4'>Kelas <span className='text-merah-bs'>{props.title}</span></h2>
            <p className='text-sm'>Bimbingan Belajar bagi anak {props.title} bertujuan untuk membantu siswa {props.akro} dapat belajar dengan efektif dan efisien, mencapai perkembangan optimal dan mengembangkan kebiasaan belajar yang baik dalam menguasai pengetahuan, keterampilan serta menyiapkan untuk melanjutkan pendidikan pada tingkat yang lebih tinggi. Dengan mengikuti Bimbingan Kelas ini, anak didik akan diajarkan metode / cara yang cepat, efisien dalam menyelesaikan soal - soal yang ada.</p>
            <div>
                <div>
                    <h3 className='font-bold text-md md:text-2xl pt-4 pb-2'>Pilihan <span className='text-merah-bs '>Paket Bimbingan Belajar</span></h3>
                    <div className='w-full flex overflow-x-auto overflow-y-auto'>
                        {paket.filter(kelas => kelas.id_jenjang === props.kelas).map((paketKelas) => {
                            return (
                                <div key={paketKelas.id}

                                    className=' w-full md:w-1/3  border-2 rounded-md border-red-600 px-2 cursor-pointer hover:scale-90 ease-in-out duration-300 py-2 mx-1'>
                                    <div className='flex justify-between py-2 gap-2'>
                                        <img src={logo} className='w-[60px]' />
                                        <h4 className='text-sm font-bold py-2'> {paketKelas.nama_paket} </h4>
                                    </div>


                                    <ul className='w-full text-sm md:h-[150px] '>
                                        <li className='list-disc'>{paketKelas.deskripsi}</li>
                                        <li className='list-disc'>Pertemuan {paketKelas.jumlah_pertemuan}x/bulan</li>
                                        <li className='list-disc'>{paketKelas.harga}</li>
                                        <li className='list-disc'>Biaya Pendaftaran 1x untuk selamanya</li>
                                    </ul>
                                    <button
                                        onClick={() => { setIdKelas(paketKelas.id)}}
                                        className={['w-full flex  p-2  px-6 justify-between items-center border-red-600 border-2 rounded-lg', idKelas === paketKelas.id ? 'bg-merah-bs text-white' : 'bg-white text-black'].join(" ")}><TbLocation /><span className='mx-auto'>Pilih Paket Ini</span></button>
                                </div>
                            )
                        })}

                    </div>

                </div>


                <h3 className='font-bold text-2xl pt-4'>Informasi Umum</h3>
            </div>

            <form method='POST' onSubmit={handleSubmit}>
                <div className='mx-auto w-full flex justify-between text-sm md:text-lg' >
                    <div className='w-full'>
                        <div>
                            <label className='text-md font-light py-1'>Nama Lengkap</label>
                            <br />
                            <input
                                type='text'
                                name='nama'
                                placeholder='Nama Lengkap Peserta Didik'
                                value={formValues.nama}
                                required
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        nama: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 pr-8 border-1 rounded-md text-sm font-light ' ></input>
                            {errors.nama && <p className='text-merah-bs'>{errors.nama}</p>}

                        </div>
                        <div className='w-full flex justify-start'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>Tempat Lahir</label>
                                <br />
                                <input
                                    type='text'
                                    name='tempat'
                                    placeholder='Tempat Lahir Peserta Didik'
                                    value={formValues.tempat}
                                    required
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
                                    required
                                    className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light'
                                />
                            </div>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Alamat</label>
                            <br />
                            <input
                                type='text'
                                name='alamat'
                                placeholder='Alamat Peserta Didik'
                                value={formValues.alamat}
                                required
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
                                name='asal-sekolah'
                                placeholder='Asal Sekolah Peserta Didik'
                                value={formValues.asal_sekolah}
                                required
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
                                    name='nama_ayah'
                                    placeholder='Nama Ayah Peserta Didik'
                                    value={formValues.nama_ayah}
                                    required
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
                                    name='nama_ibu'
                                    placeholder='Nama Ibu'
                                    value={formValues.nama_ibu}
                                    required
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
                                name='telepon_anak'
                                placeholder='Asal Sekolah Peserta Didik'
                                value={formValues.telepon_anak}
                                required
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
                                    name='telepon_ayah'
                                    placeholder='No Handphone Ayah Peserta Didik'
                                    value={formValues.telepon_ayah}
                                    required
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
                                    name='telepon_ibu'
                                    placeholder='No Handphone Ibu Peserta Didik'
                                    value={formValues.telepon_ibu}
                                    required
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