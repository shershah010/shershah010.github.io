import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './view/home';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;