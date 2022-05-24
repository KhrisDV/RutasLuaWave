import { Link, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Surf from './views/Surf';
import Skate from './views/Skate';
import About from './views/About';
import Contact from './views/Contact';
import './App.css';

function App() {

  return (
    <>

      <header>
        <h1>
          Vista de la web
        </h1>
        <nav>
          <Link to={"/"}><button>Home</button></Link>
          <Link to={"/surf/"}><button>Surf</button></Link>
          <Link to={"/skate/"}><button>Skate</button></Link>
          <Link to={"/about/"}><button>About</button></Link>
          <Link to={"/contact/"}><button>Contacto</button></Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/surf/" element={<Surf/>}/>
        <Route path="/skate/" element={<Skate/>}/>
        <Route path="/about/" element={<About/>}/>
        <Route path="/contact/" element={<Contact/>}/>
      </Routes>

    </>
  );
}

export default App;
