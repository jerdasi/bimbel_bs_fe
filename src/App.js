import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Faq from './Pages/Faq';
import PembayaranBerhasil from './Pages/Pembayaran/PembayaranBerhasil';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaketBimbingan from './Pages/PaketBimbingan';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/paketbimbingan' element={<PaketBimbingan/>}/>
          
          <Route path='/pembayaran-berhasil' element={<PembayaranBerhasil/>}></Route>
        </Routes>
      </BrowserRouter>
        
      <Footer/>
    </>
  );
}

export default App;
