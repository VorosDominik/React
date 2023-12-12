import logo from './logo.svg';
import './App.css';
import Jatekok from './pages/Jatekok.JS';
import TicTac from './pages/TicTac';
import LightOn from './pages/LightOn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tictactoe" element={<TicTac />} />
          <Route path="lightson" element={<LightOn />} />
          <Route path="*" element={<Jatekok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
