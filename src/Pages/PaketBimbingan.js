import React , {useState, useEffect} from 'react'
import register from '../Assets/Images/register.png'


function PaketBimbingan() {

    const [classes, setClasses] = useState([])

    useEffect(()=> {
        fetchdata()
    }, [])

    const fetchdata = async() => {
        const response = await fetch('http://localhost:8080/classes')
        const data = await response.json()

        setClasses(data)
    }

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
            <form>
            <h2>Kelas Rekomendasi</h2>
            <p>Fitur ini dapat membantu anak anda untuk menemukan kelas yang cocok dengan kemampuan maupun kepribadiannya. Menemukan kelas yang tepat dapat mempermudah anak didik untuk menyerap pembelajaran di bimbingan dengan baik sehingga berguna dalam pembelajaran di sekolah nya.</p>
            <div>
                
                    <h3>Informasi Umum</h3>
                    <div className='mx-auto w-full flex justify-between' >
                    <div className='w-3/4'>
                    <div>
                        <label className='text-md font-light py-1'>Nama Lengkap</label>
                        <br/>
                        <input type='text' placeholder='Nama Lengkap Peserta Didik' 
                        className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light hover:border-red-500' ></input>
                    </div>
                    <div>
                        <label className='text-md font-light py-1'>Tempat, Tanggal Lahir</label>
                        <br/>
                        <input type='text' placeholder='Tempat Tanggal Lahir Peserta Didik' 
                        className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light' ></input>
                    </div>
                    <div>
                        <label className='text-md font-light py-1'>Alamat</label>
                        <br/>
                        <input type='text' placeholder='Alamat Peserta Didik' className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light' ></input>
                    </div>
                    <div>
                        <label className='text-md font-light py-1'>Asal Sekolah</label>
                        <br/>
                        <input type='text' placeholder='Asal Sekolah Peserta Didik' className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light' ></input>
                    </div>
                    <div className='flex justify-start'>
                        <div className='w-1/2 md:w-1/4 mr-2'>
                            <label className='text-md font-light py-1'>Nama Ayah</label>
                            <br/>
                            <input type='text' placeholder='Nama Ayah Peserta Didik'  className='w-full p-2 border-1 rounded-md text-sm font-light'></input>
                        </div>
                        <div className='w-1/2 md:w-1/4'>
                            <label className='text-md font-light py-1'>Pekerjaan Ayah</label>
                            <br/>
                            <input type='text' placeholder='Pilih Salah Satu' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                    </div>
                    <div className='flex mx-auto'>
                        <div className='w-1/2 md:w-1/4 mr-2'>
                            <label className='text-md font-light py-1'>Nama Ibu</label>
                            <br/>
                            <input type='text' placeholder='Nama Ibu Peserta Didik' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                        <div className='w-1/2 md:w-1/4'>
                            <label className='text-md font-light py-1'>Pekerjaan Ibu</label>
                            <br/>
                            <input type='text' placeholder='Pilih Salah Satu' className='w-full  p-2 border-1 rounded-md text-sm font-light' ></input>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2 md:w-1/4 mr-2'>
                            <label className='text-md font-light py-1'>No. HP Ayah</label>
                            <br/>
                            <input type='text' placeholder='No Handphone Ayah Peserta Didik' className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                        </div>
                        <div className='w-1/2 md:w-1/4'>
                            <label className='text-md font-light py-1'>No. HP Ibu</label>
                            <br/>
                            <input type='text' placeholder='No Handphone Ibu Peserta Didik' 
                            className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                        </div>
                    </div>
                    
                    </div>
                    <img src={register} className='hidden md:flex md:w-[40%] md:h-[30%] md:p-30' />
                    </div>
                    
                    <h3>Nilai Rapor</h3>
                    <div className='w-full md:flex md:justify-between'>
                        <div className='w-1/2'>
                            <div>
                                <label className='text-md font-light py-1'>Jenjang Pendidikan</label>
                                <br/>
                                <input type='text' placeholder='Pilih Salah Satu' className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='text-md font-light py-1'>Matematika</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                                <div>
                                    <label className='text-md font-light py-1'>IPA</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='text-md font-light py-1'>Matematika</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                                <div>
                                    <label className='text-md font-light py-1'>IPA</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <label className='text-md font-light py-1'>Kelas</label>
                                <br/>
                                <input type='text' placeholder='Pilih Salah Satu'
                                className='w-full md:w-1/2 p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='text-md font-light py-1'>B. Indonesia</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                                <div>
                                    <label className='text-md font-light py-1'>Ranking</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <label className='text-md font-light py-1'>B. Indonesia</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                                <div>
                                    <label className='text-md font-light py-1'>Ranking</label>
                                    <br/>
                                    <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                            <label>Upload Foto *Rapi dan Formal</label>
                            <br/>
                            <input type='file' placeholder='Pilih Salah Satu'/>
                     </div>
                     <div>
                        <button className='p-2 w-full bg-merah-bs text-white font-bold md:text-lg rounded-md my-2'>Daftar</button>
                     </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default PaketBimbingan