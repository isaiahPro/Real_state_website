
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
