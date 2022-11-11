import React from 'react';
import { useState } from 'react';
import Home from './pages/home/home';
import CaseTest from "./pages/casetest/casetest"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [ResBasico, setResBasico] = useState('');
  const [ResAlternativo, setResAlternativo] = useState('');
  const [ResExcecao, setResExcecao] = useState('');
  const [ResGeral, setResGeral] = useState('');

  const FluxoBasico = (res) => {
    setResBasico(res)
  }

  const FluxoAlternativo = (res) => {
      setResAlternativo(res)
  }

  const FluxoExcecao = (res) => {
      setResExcecao(res)
  }

  const FluxoGeral = (res) => {
      setResGeral(res)
  }

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Home 
          FluxoBasico={FluxoBasico} 
          FluxoAlternativo={FluxoAlternativo} 
          FluxoExcecao= {FluxoExcecao} 
          FluxoGeral={FluxoGeral}
        />} path="/"/>
        <Route  element={<CaseTest
          ResBasico={ResBasico}
          ResAlternativo={ResAlternativo}
          ResExcecao={ResExcecao}
          ResGeral={ResGeral}
        />} path="/casetest"/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
