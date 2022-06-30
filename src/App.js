import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import PembayaranBerhasil from './Pages/Pembayaran/PembayaranBerhasil';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/pembayaran-berhasil' element={<PembayaranBerhasil/>}></Route>
        </Routes>
      </BrowserRouter>
        
      <Footer/>
    </>
  );
}

export default App;
