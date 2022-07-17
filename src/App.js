import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";//importare robe routing
import NavBar from './components/navBar';
import Home from './components/home';
import Pagina1 from './components/pagina1';
import Pagina2 from './components/pagina2';

function App() {

  return (
    <div className="App">

      <NavBar className="row"></NavBar>
      <div className='row'></div>
      <Routes className="row">
        <Route path="/" element={<Home/>} />
        <Route path="/pagina1" element={<Pagina1/>} />
        <Route path="/pagina2" element={<Pagina2/>} />
      </Routes>

    </div>
  );
}

export default App;
