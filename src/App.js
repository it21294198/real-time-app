import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import Database from '../src/pages/Database';
import P5Sketch from './pages/p5canvas';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/db">Database</Link>
            </li>
            <li>
              <Link to="/p5">P5</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/db" element={<Database />} />
            <Route path="/p5" element={<P5Sketch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
