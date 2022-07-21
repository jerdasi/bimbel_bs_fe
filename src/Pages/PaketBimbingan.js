import React, { useState, useEffect } from 'react'
import axios from 'axios'
import insignia from '../Assets/Images/insignia.png'
import book from '../Assets/Images/book.svg'
import FormRegistManual from './Pendaftaran/FormRegistManual'
import FormRegistRekomendasi from './Pendaftaran/FormRegistRekomendasi'


function PaketBimbingan() {

    const [jenjang, setJenjang] = useState([])
    const [selected, setSelected] = useState('rekomendasi')
    const [title, setTitle] = useState('')
    const [akro, setAkro] = useState('')
    const [kelas, setKelas] = useState('')


    const _handleSelected = (item) => {
        setSelected(item.akronim)
        setTitle(item.nama_jenjang)
        setAkro(item.akronim)
        setKelas(item.id)
    }


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
            .then((res) => setJenjang(res.data.data));

    }, [])

    return (
        <div className='w-full md:px-16 py-12'>
            <div className='w-full'>
                <h1 className='font-bold text-md md:text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan</h1>
                <p className='text-sm'>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div className='w-full'>
                <h3 className='text-lg md:text-3xl font-bold'><span className='text-merah-bs'>Pilih</span> atau <span className='text-merah-bs'> ikuti </span> rekomendasi kategori anak anda</h3>
                <div className='flex flex-row justify-start overflow-x-auto h-1/4'>
                    <div onClick={() => {
                        setSelected('rekomendasi')
                        setKelas('')
                    }} className={['w-1/2 md:w-1/4  p-2 mx-1 md:p-4  text-center md:mx-2 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-90 ease-in-out duration-300 justify-center gap-2', selected == 'rekomendasi'? 'border-merah-bs': 'border-gray-900'].join(" ")}>
                        <img src={insignia} className='w-[90px] mx-auto pt-4' />
                        <h4 className='text-sm mt-10' >Rekomendasi</h4>
                    </div>
                    {jenjang.map((item) => {
                        return (
                            <div onClick={() => _handleSelected(item)} key={item.id} 
                            className={['w-1/2 md:w-1/4 px-4 py-2 md:p-4 text-center mx-1 md:mx-2 border-2 rounded-md items-center cursor-pointer hover:scale-90 ease-in-out duration-300 justify-center gap-2', item.id == kelas? 'border-merah-bs': 'border-gray-900'].join(" ")}>
                                <img src={book} className='w-[90px] mx-auto pt-4' />
                                <h4 className='text-sm bottom-0 mt-10 w-full'>{item.akronim}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {selected === 'rekomendasi' ? <FormRegistRekomendasi /> : <FormRegistManual 
                title={title} 
                akro={akro} 
                kelas={kelas}
                />}

            </div>
        </div>
    )
}

export default PaketBimbingan