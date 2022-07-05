import React from 'react'
import register from '../Assets/Images/register.png'
import classes from '../Components/json/classes.json'

function PaketBimbinganRekomendasi() {
  return (
    <div className='bg-white px-16 py-12'>
        <div className='w-full  md:w-[70%]'>
            <h1 className='font-bold text-5xl'>Gabung Bersama Kami dan Garansi 7 Hari* Percobaan</h1>
            <p>Percayakan masa depan anak anda bersama kami. Ikuti masa percobaan selama 7 hari dan apabila merasa tidak terbantu ajukan pengembalian dana</p>
        </div>
        <div className='w-full'>
            <h3>Pilih atau ikuti rekomendasi kategori anak anda</h3>
            <ul className='flex flex-row justify-between'>
              {classes.map((item, index) => {
                return(
                  <li key={index} className='w-[120px]  p-2 border-2 border-gray-900 rounded-md items-center cursor-pointer hover:scale-105 ease-in-out duration-300'>
                  <img src={item.icon}/>
                  <h4 className='text-sm'>{item.title}</h4>
                </li>
                )
              })}
          </ul>
        </div>
        <div>
            <h2>Kelas Rekomendasi</h2>
            <p>Fitur ini dapat membantu anak anda untuk menemukan kelas yang cocok dengan kemampuan maupun kepribadiannya. Menemukan kelas yang tepat dapat mempermudah anak didik untuk menyerap pembelajaran di bimbingan dengan baik sehingga berguna dalam pembelajaran di sekolah nya.</p>
            <div>
                <form>
                    <h3>Informasi Umum</h3>
                    <div className='mx-auto grid md:grid-cols-2' >
                    <div>
                        <h5 className='text-md font-light'>Nama Lengkap</h5>
                        <input type='text' placeholder='Nama Lengkap' ></input>
                    </div>
                    <img src={register} className='hidden md:flex md:w-[40%]' />
               
                    </div>
                     </form>

            </div>
        </div>
    </div>
  )
}

export default PaketBimbinganRekomendasi