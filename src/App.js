import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </>
  );
}

export default App;
