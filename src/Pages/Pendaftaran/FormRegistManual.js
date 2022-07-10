import React from 'react'
import register from '../../Assets/Images/register.png'

function FormRegistManual() {
  return (
    <form>
    <h2 className='font-bold'>Kelas <span className='text-merah-bs'>Sekolah Dasar</span></h2>
    <p>Bimbingan Belajar bagi anak sekolah dasar bertujuan untuk membantu siswa SD dapat belajar dengan efektif dan efisien, mencapai perkembangan optimal dan mengembangkan kebiasaan belajar yang baik dalam menguasai pengetahuan, keterampilan serta menyiapkan untuk melanjutkan pendidikan pada tingkat yang lebih tinggi. Dengan mengikuti Bimbingan Kelas ini, anak didik akan diajarkan metode / cara yang cepat, efisien dalam menyelesaikan soal - soal yang ada.</p>
    <div>
       

        <div>
            <h3 className='font-bold'>Pilihan <span className='text-merah-bs '>Paket Bimbingan Belajar</span></h3>
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