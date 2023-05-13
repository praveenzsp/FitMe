import './App.css';
import Home from './components/Home';
import Trainers from './components/Trainers';
import Programs from './components/Programs';
import Plans from './components/Plans';
import Tesstimonials from './components/Tesstimonials';
import Footer from './components/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Crossfit from './components/Crossfit';
import Strength from './components/Strength';
import Yoga from './components/Yoga';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';


const Routing=()=>{
  return (
    <div className='App'>
     <Home/>
     <Trainers/>
     <Programs/>
     <Plans/>
     <Tesstimonials/>
     <Footer/>
     </div>
  );

}

function App() {
  return(
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route  exact path='/' element={<Routing/>}/>
        <Route  path='/cardio_and_crossfit' element={<Crossfit/>}/>
        <Route  path='/strength_training' element={<Strength/>}/>
        <Route  path='/yoga_training' element={<Yoga/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
