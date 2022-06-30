import React from 'react'
import hero from '../../Images/Hero-Images.svg'
import insigh from '../../Images/insignia.svg'
import book from '../../Images/book.svg'
import why from '../../Images/6333765.svg'
import '../LandingPage/LandingPage.css'

function LandingPage() {
  return (
    <>
    <div className='hero'>
        <div className='contentHero'>
            <div className='textBeta'>
                <h1>Beta Smart</h1>
                <h2><span className='fred'>Quality</span> More Than <span className='fred'>Quantity</span></h2>
                <p>Merupakan Bimbingan Belajar berbasis Private atau Reguler yang berdiri di Berau, Kalimantan Timur sejak 27 Agustus 2016. Dengan metode pembelajaran “<span className='fred'>DARE TO GREAT</span>” oleh pengajar pengajar profesional yang menghasilkan siswa-siswa optimis, cerdas dan berprestasi. Ayo <span className='fred'>pilih</span> kelasmu atau gunakan fitur <span className='fred'>rekomendasi</span> untuk memudahkan menemukan kelas yang tepat</p>
                <button className='button1'> Pilih Kelas</button>
                <button className='button-2'> Rekomendasi Kelas</button>
            </div>
            <img src={hero}/>
        </div>
        <div className='rekom'>
            <div className='contentRekom'>
                <h1> Daftar dan Mulai Belajar </h1>
                <p>Pilih sendiri atau ikuti rekomendasi kami</p>
                <div className='listRekom'>
                    <ul>
                        <li className='frRekom'><img src={insigh}/><h4>Rekomendasi</h4></li>
                        <li className='frRekom'><img src={book}/><h4>Belum Sekolah</h4></li>
                        <li className='frRekom'><img src={book}/><h4>SD</h4></li>
                        <li className='frRekom'><img src={book}/><h4>SMP</h4></li>
                        <li className='frRekom'><img src={book}/><h4>SMA</h4></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='whyBeta'>
            <h1>Kenapa harus Beta Smart?</h1>
            <div className='contentWhy'>
                <img src={why}/>
                <div className='reasons'>
                    <p>Beta Smart sebagai penyedia jasa bimbingan belajar, menawarkan beberapa keuntungan yang dapat membantu anak didik dapat belajar dengan baik dan menjadi siswa berprestasi di sekolahnya</p>
                    <div className='listReasons'>
                        <div className='listReasons1'>
                            <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                            <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                            <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                            
                        </div>
                        <div className='listReasons1'>
                        <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                            <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                            <div className='frList'>
                                <h3>Tentor Berpengalaman dan Profesional</h3>
                                <p>Tentor merupakan lulusan terbaik hingga seorang dosen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage