import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import Home from './pages/Home';
import Van from './pages/Van';
import Vans from './pages/Vans';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<Van />} />
      </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
