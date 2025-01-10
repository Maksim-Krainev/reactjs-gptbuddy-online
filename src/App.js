import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import PysyunChain from "./Pages/PysyunChain";
import ClaudeWeb from "./Pages/ClaudeWeb";



function App() {


  return (
    <div>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pysyun_chain" element={<PysyunChain />} />
        <Route path="/claude_web" element={<ClaudeWeb />} />
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
