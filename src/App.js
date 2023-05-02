import {
  BrowserRouter as Router,
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
      <Router>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
