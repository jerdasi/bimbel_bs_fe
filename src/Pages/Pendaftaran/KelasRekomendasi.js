import React from 'react'

function KelasRekomendasi() {
    return (
        <div>
            <div className='w-full  md:w-[70%]'>
                <h1 className='font-bold text-5xl'><span className='text-merah-bs'>Gabung</span> Bersama Kami dan <span className='text-merah-bs'>Garansi 7 Hari* </span> Percobaan</h1>
                <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
            </div>
            <div>
                <h2>Rekomendasi Kelas</h2>
                <p>Berdasarkan data yang kamu berikan, kami melakukan analisis untuk memberikan kamu rekomendasi paket bimbingan belajar agar kamu tidak bingung untuk memilih yah! Pilih atau Abaikan dan Tetap Semangat Belajar nya ya!</p>
            </div>
            <div>
                <h2>Kelas Lainnya</h2>
            </div>
            <div>
                <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Lanjutkan Pendaftaran</button>
            </div>
        </div>
    )
}

export default KelasRekomendasi