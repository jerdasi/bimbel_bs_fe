import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validation from '../../Components/validation'
import _, { set } from 'lodash'
import register from '../../Assets/Images/register.png'

function FormRegistRekomendasi() {

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [jenjang, setJenjang] = useState([])
    const [paket, setPaket] = useState([])
    const [rekomendasi, setRekomendasi] = useState(0)
    const [filterJenjang, setFilterJenjang] = useState(0)
    const [idJenjang, setIdJenjang] = useState('')
    const [nilai, setNilai] = useState([
        { matematika: 0, indo: 0, ipa: 0 },
        { matematika: 0, indo: 0, ipa: 0 }
    ])
    const [ranking, setRanking] = useState({
        sem1: 0,
        sem2: 0
    })
    const [finansial, setFinansial] = useState('')
    const [kebutuhan, setKebutuhan] = useState(1)
    const [showLoad, setShowLoad] = useState(false)

    const checkNilai = () => {
        let all_nilai = nilai.map((item) => {
            let hasil =
                (parseInt(item.matematika) +
                parseInt(item.indo) +
                parseInt(item.ipa)) / 3

            return hasil
        })
        let check = (all_nilai[0] + all_nilai[1]) / 2
        if (check >= 90) {
            return 1
        } else if (check >= 80 && check < 90) {
            return 2
        } else { return 3 }
    }

    const checkSyaratNilai = (check) => {
        if (check >= 90) {
            return 3
        } else if (check >= 80 && check < 90) {
            return 2
        } else {
            return 1
        }
    }

    const checkRanking = () => {
        if (
            (ranking.sem1 <= 10 && ranking.sem1 >= 1) ||
            (ranking.sem2 <= 10 && ranking.sem2 >= 1)
        ) {
            return 1
        } else { return 2 }
    }

    const checkFinansial = () => {
        if (finansial == 'murah') {
            return 1
        } else if (finansial == 'biasa/standar') {
            return 2
        } else { return 3 }
    }

    const checkKebutuhan = () => {
        return kebutuhan
    }

    const checkRequireRanking = (angka) => {
        if (angka == 1) {
            return 1
        } else {
            return 2
        }
    }

    const checkHarga = (angka) => {
        if (angka >= 0 && angka <= 325000) {
            return 1
        } else if (angka > 325000 && angka <= 550000) {
            return 2
        } else {
            return 3
        }
    }

    const getRekomendasi = () => {
        setShowLoad(true)

        let check = [
            checkNilai(),
            checkRanking(),
            checkFinansial(),
            checkKebutuhan(),
        ]

        let penjumlahan_bobot_atribut = check.reduce(function (
            previousValue,
            currentValue
        ) {
            return previousValue + currentValue
        })

        check = check.map((item) => item / penjumlahan_bobot_atribut)
        console.log(check)
        console.log(filterJenjang)

        let all_alternatif = paket
            .filter((item) => item.id_jenjang == filterJenjang)
            .map((item) => {
                console.log(item.harga)
                return [
                    checkSyaratNilai(item.min_nilai),
                    checkRequireRanking(item.riwayat_ranking),
                    checkHarga(item.harga),
                    item.fasilitas_ujian == 1 ? 2 : 1,
                    item.nama_paket,
                ]
            })

        console.log(all_alternatif)

        let hasil = []
        for (let i = 0; i < all_alternatif.length; i++) {
            let total =
                all_alternatif[i][0] ** (check[0] * -1) *
                all_alternatif[i][1] ** (check[1] * -1) *
                all_alternatif[i][2] ** (check[2] * -1) *
                all_alternatif[i][3] ** (check[3] * 1)
            hasil.push(total)
        }

        //menghitung v
        let penjumlahan_vektor_s = hasil.reduce(function (
            previousValue,
            currentValue
        ) {
            return previousValue + currentValue
        })
        hasil = hasil.map((item) => item / penjumlahan_vektor_s)
       
        setShowLoad(false)

        return paket.filter((item) => item.id_jenjang == filterJenjang)[
            _.indexOf(hasil, _.max(hasil))
            ]

        

    }

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
        getRekomendasi()
        setRekomendasi(getRekomendasi().id)
        setIdJenjang(filterJenjang)
        console.log(getRekomendasi())
        
        axios
            .post(`${process.env.REACT_APP_API}/peserta-didik`,
                form_data,
                config)
            .then((res) => {
                // console.log(res.data.data.id)
                navigate(`/kelas-rekomendasi`, { state: { id_jenjang: filterJenjang ,id_paket: getRekomendasi().id } })
            }).catch(err => console.log(err.message))

        
        // console.log(form_data)

    }

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/paket-bimbingan`)
            .then((res) => setPaket(res.data.data));

        axios
            .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
            .then((res) => setJenjang(res.data.data));
        
            setFormValues({ ...formValues, id_jenjang: filterJenjang })
    }, []);

    return (
        <form method='POST' onSubmit={handleSubmit}>
            <h2 className='font-bold'>Kelas <span className='text-merah-bs'>Rekomendasi</span></h2>
            <p>Fitur ini dapat membantu anak anda untuk menemukan kelas yang cocok dengan kemampuan maupun kepribadiannya. Menemukan kelas yang tepat dapat mempermudah anak didik untuk menyerap pembelajaran di bimbingan dengan baik sehingga berguna dalam pembelajaran di sekolah nya.</p>
            <div>

                <h3>Informasi Umum</h3>
                <div className='mx-auto w-full flex justify-between' >
                    <div className='w-full'>
                        <div>
                            <label className='text-md font-light py-1'>Nama Lengkap</label>
                            <br />
                            <input
                                type='text'
                                name='nama_siswa'
                                id='nama_siswa'
                                placeholder='Nama Lengkap Peserta Didik'
                                required
                                value={formValues.nama}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        nama: e.target.value
                                    })
                                }}
                                className='w-full md:w-full p-2 pr-8 border-1 rounded-md text-sm font-light '

                            ></input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Tempat, Tanggal Lahir</label>
                            <br />
                            <input
                                type='text'
                                name='tempat'
                                id='tempat'
                                placeholder='Tempat Tanggal Lahir Peserta Didik'
                                required
                                value={formValues.tempat}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        tempat: e.target.value
                                    })
                                }}
                                className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light'

                            ></input>
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
                                    })}
                                id='tanggal_siswa'
                                required
                                className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light'

                            >
                            </input>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Alamat</label>
                            <br />
                            <textarea
                                type='text'
                                id=''
                                rows='5'
                                name='alamat'
                                required
                                value={formValues.alamat}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        alamat: e.target.value
                                    })
                                }}
                                placeholder='Alamat Peserta Didik'
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light'
                            ></textarea>
                        </div>
                        <div>
                            <label className='text-md font-light py-1'>Asal Sekolah</label>
                            <br />
                            <input
                                type='text'
                                name='asal_sekolah'
                                required
                                value={formValues.asal_sekolah}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        asal_sekolah: e.target.value
                                    })
                                }}
                                placeholder='Asal Sekolah Peserta Didik'
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
                                    required
                                    value={formValues.nama_ayah}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            nama_ayah: e.target.value
                                        })
                                    }}
                                    className='w-full p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2  '>
                                <label className='text-md font-light py-1'>Nama Ibu</label>
                                <br />
                                <input
                                    type='text'
                                    name='nama_ibu'
                                    placeholder='Nama Ibu Peserta Didik'
                                    required
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
                                name='telepon_anak'
                                required
                                value={formValues.telepon_anak}
                                onChange={(e) => {
                                    setFormValues({
                                        ...formValues,
                                        telepon_anak: e.target.value
                                    })
                                }}
                                placeholder='No Handphone Anak'
                                className='w-full md:w-full p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2  mr-2'>
                                <label className='text-md font-light py-1'>No. HP Ayah</label>
                                <br />
                                <input
                                    type='text'
                                    name='telepon_ayah'
                                    required
                                    value={formValues.telepon_ayah}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            telepon_ayah: e.target.value
                                        })
                                    }}
                                    placeholder='No Handphone Ayah Peserta Didik'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2 '>
                                <label className='text-md font-light py-1'>No. HP Ibu</label>
                                <br />
                                <input
                                    type='text'
                                    name='telepon_ibu'
                                    required
                                    value={formValues.telepon_ibu}
                                    onChange={(e) => {
                                        setFormValues({
                                            ...formValues,
                                            telepon_ibu: e.target.value
                                        })
                                    }}
                                    placeholder='No Handphone Ibu Peserta Didik'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>

                    </div>
                    <img src={register} className='hidden lg:flex lg:w-[40%] lg:h-[30%] lg:p-30 lg:m-14' />
                </div>

                <h3>Nilai Rapor</h3>
                <div className='w-full md:flex md:justify-start'>
                    <div className='w-full pr-2 '>
                        <div>
                            <label className='text-md font-light py-1'>Jenjang Pendidikan</label>
                            <br />
                            <select
                                name=""
                                className="p-2 border border-abu-bs rounded-md text-sm "
                                onChange={(e) => {
                                    setFilterJenjang(parseFloat(e.target.value))
                                    // setFormValues({
                                    //     ...formValues,
                                    //     id_jenjang:parseInt(e.target.value)
                                    // })
                                }}
                            >
                                {jenjang.map((item) => (
                                    <option value={item.id}>{item.nama_jenjang}</option>
                                ))}
                            </select>

                        </div>
                        {/* <div>
                            <label className='text-md font-light py-1'>Kelas</label>
                            <br />
                            <input 
                            type='text' 
                            placeholder='Pilih Salah Satu'
                                className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                        </div> */}
                        <label className='pt-2 pb-2 text-xl '>Semester 1</label>
                        <div className='flex w-full gap-8'>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Matematika</label>
                                <br />
                                <input
                                    type='number'
                                    placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light '
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[0].matematika = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>B. Indonesia</label>
                                <br />
                                <input
                                    type='number'
                                    required
                                    placeholder='Isi Dengan Angka'
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[0].indo = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>IPA</label>
                                <br />
                                <input
                                    type='number'
                                    placeholder='Isi Dengan Angka'
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[0].ipa = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Ranking</label>
                                <br />
                                <input
                                    type='number'
                                    value={ranking.sem1}
                                    onChange={(e) =>
                                        setRanking({
                                            ...ranking,
                                            sem1: parseInt(e.target.value),
                                        })
                                    }
                                    placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>

                        </div>
                        <label className='pt-2 pb-2 text-xl'>Semester 2</label>
                        <div className='flex w-full gap-8'>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Matematika</label>
                                <br />
                                <input
                                    type='number'
                                    placeholder='Isi Dengan Angka'
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[1].matematika = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light '></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>B. Indonesia</label>
                                <br />
                                <input
                                    type='number'
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[1].indo = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}
                                    placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>IPA</label>
                                <br />
                                <input
                                    type='number'
                                    placeholder='Isi Dengan Angka'
                                    onChange={(e) => {
                                        let nilai_baru = [...nilai];
                                        nilai_baru[1].ipa = parseInt(e.target.value);
                                        setNilai(nilai_baru);
                                    }}
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Ranking</label>
                                <br />
                                <input 
                                type='number' 
                                placeholder='Isi Dengan Angka'
                                value={ranking.sem2}
                                onChange={(e) =>
                                    setRanking({
                                        ...ranking,
                                        sem2: parseInt(e.target.value),
                                    })
                                }
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>

                        </div>
                    </div>


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
                <p>Kemampuan Finansial</p>
                <p>
                    Apakah membayar 750ribu/Paket Termahal di Bimbel Beta Smart
                    untuk 12 kali pertemuan
                </p>
                <div className="flex gap-4">
                    <input
                        type="radio"
                        name="kemampuan-finansial"
                        id="murah"
                        onClick={(e) => setFinansial("murah")}
                    />
                    <label htmlFor="murah">Murah</label>
                    <input
                        type="radio"
                        name="kemampuan-finansial"
                        id="biasa/standar"
                        onClick={(e) => setFinansial("biasa/standar")}
                    />
                    <label htmlFor="biasa/standar">Biasa / Standar</label>
                    <input
                        type="radio"
                        name="kemampuan-finansial"
                        id="mahal"
                        onClick={(e) => setFinansial("mahal")}
                    />
                    <label htmlFor="mahal">Kemahalan</label>
                </div>

                <p className="mt-4">Kebutuhan</p>
                <p>Tujuan kamu mengikuti kegiatan bimbingan belajar?</p>
                <div className="flex gap-4">
                    <input
                        type="radio"
                        name="tujuan"
                        id="tidak"
                        onClick={(e) => setKebutuhan(1)}
                    />
                    <label htmlFor="tidak">
                        Untuk Memperdalam Ilmu dan Membantu dalam Pelajaran
                    </label>
                    <input
                        type="radio"
                        name="tujuan"
                        id="iya"
                        onClick={(e) => setKebutuhan(2)}
                    />
                    <label htmlFor="iya">
                        Untuk Persiapan Ujian dalam Waktu Dekat
                    </label>
                </div>
                <div>
                    {/* <button onClick={getRekomendasi} className='p-4'> berikan rekomendasi</button> */}
                    <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Daftar</button>
                </div>
            </div>
        </form>

    )
}

export default FormRegistRekomendasi