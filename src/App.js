import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
