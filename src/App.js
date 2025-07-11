// import './App.css';
import About from './components/About';
// import Events from './components/Events';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Screened from './components/Screened';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Eventsinfo from './components/Eventsinfo';
import Registration from './components/Registration';
import Team from './components/Team';
import Moviesmain from './components/Moviesmain';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      
      
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Events' element={<Eventsinfo/>} />
      <Route path='//Movies' element={<Moviesmain/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/registration' element={<Registration />}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;

