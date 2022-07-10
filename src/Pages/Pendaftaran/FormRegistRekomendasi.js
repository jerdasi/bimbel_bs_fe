import React from 'react'
import register from '../../Assets/Images/register.png'

function FormRegistRekomendasi() {
    return (
        <form>
            <h2 className='font-bold'>Kelas <span className='text-merah-bs'>Rekomendasi</span></h2>
            <p>Fitur ini dapat membantu anak anda untuk menemukan kelas yang cocok dengan kemampuan maupun kepribadiannya. Menemukan kelas yang tepat dapat mempermudah anak didik untuk menyerap pembelajaran di bimbingan dengan baik sehingga berguna dalam pembelajaran di sekolah nya.</p>
            <div>

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

                <h3>Nilai Rapor</h3>
                <div className='w-full md:flex md:justify-start'>
                    <div className='w-full pr-2'>
                        <div>
                            <label className='text-md font-light py-1'>Jenjang Pendidikan</label>
                            <br />
                            <input type='text' placeholder='Pilih Salah Satu' className='w-full  p-2 border-1 rounded-md text-sm font-light mr-10'></input>
                        </div>
                        <div className='flex w-full'>
                            <div className='mr-2 w-1/2'>
                                <label className='text-md font-light py-1'>Matematika</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light '></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>IPA</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='mr-2 w-1/2'>
                                <label className='text-md font-light py-1'>Matematika</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>IPA</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <div>
                            <label className='text-md font-light py-1'>Kelas</label>
                            <br />
                            <input type='text' placeholder='Pilih Salah Satu'
                                className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mr-2'>
                                <label className='text-md font-light py-1'>B. Indonesia</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Ranking</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2 mr-2'>
                                <label className='text-md font-light py-1'>B. Indonesia</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                            <div className='w-1/2'>
                                <label className='text-md font-light py-1'>Ranking</label>
                                <br />
                                <input type='text' placeholder='Isi Dengan Angka'
                                    className='w-full  p-2 border-1 rounded-md text-sm font-light'></input>
                            </div>
                        </div>
                    </div>

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

export default FormRegistRekomendasi