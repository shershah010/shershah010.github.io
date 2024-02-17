import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './view/home/home';
import Shook from './view/shook/shook';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/21b5c532e73610a35f462f1d70e5cc7e" element={<Shook />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;