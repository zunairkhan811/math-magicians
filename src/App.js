import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter basename="math-magicians">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
