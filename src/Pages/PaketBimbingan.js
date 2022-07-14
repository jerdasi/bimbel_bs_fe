import React, { useState, useEffect } from 'react'
import axios from 'axios'
import insignia from '../Assets/Images/insignia.png'
import FormRegistManual from './Pendaftaran/FormRegistManual'
import FormRegistRekomendasi from './Pendaftaran/FormRegistRekomendasi'


function PaketBimbingan() {

    const [jenjang, setJenjang] = useState([])
    
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/jenjang-pendidikan`)
            .then((res) => setJenjang(res.data.data));
        
    })

    return (
        <div className='bg-white px-16 py-12'>
            <div className='w-full  md:w-[70%]'>
                <h1 className='font-bold text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan</h1>
                <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div className='w-full'>
                <h3 className='text-3xl font-bold'><span className='text-merah-bs'>Pilih</span> atau <span className='text-merah-bs'> ikuti </span> rekomendasi kategori anak anda</h3>
                <ul className='flex flex-row justify-between'>
                    {jenjang.map((item) => {
                        return (
                            <li key={item.id} className='w-1/4 p-2 md:p-4 md:w-[200px] text-center mx-auto md:mx-0 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-105 ease-in-out duration-300 justify-center'>
                                <img src={insignia} className='w-[90px]' />
                                <h4 className='text-sm'>{item.nama_jenjang}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                
                <FormRegistManual />
            </div>
        </div>
    )
}

export default PaketBimbingan