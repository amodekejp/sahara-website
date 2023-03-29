import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Footer from './components/Footer';
import Drinks from './components/Drinks';

function App () {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/drinks" element={<Drinks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
