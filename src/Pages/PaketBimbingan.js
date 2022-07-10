import React, { useState, useEffect } from 'react'
import FormRegistManual from './FormRegistManual'
import FormRegistRekomendasi from './FormRegistRekomendasi'


function PaketBimbingan() {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const response = await fetch('http://localhost:8080/classes')
        const data = await response.json()

        setClasses(data)
    }

    return (
        <div className='bg-white px-16 py-12'>
            <div className='w-full  md:w-[70%]'>
                <h1 className='font-bold text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan</h1>
                <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div className='w-full'>
                <h3 className='text-3xl font-bold'><span className='text-merah-bs'>Pilih</span> atau <span className='text-merah-bs'> ikuti </span> rekomendasi kategori anak anda</h3>
                <ul className='flex flex-row justify-between'>
                    {classes.map((item, index) => {
                        return (
                            <li key={index}
                                className='w-[120px]  p-2 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-105 ease-in-out duration-300'>
                                <img src={item.icon} />
                                <h4 className='text-sm'>{item.title}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <FormRegistRekomendasi/>
                <FormRegistManual/>
            </div>
        </div>
    )
}

export default PaketBimbingan