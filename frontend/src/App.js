import React from 'react';
import { useState } from 'react';
import MyContext from './context/myContext';
import Home from './pages/home/home';
import CaseTest from "./pages/casetest/casetest"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [ResBasico, setResBasico] = useState('');
  const [ResAlternativo, setResAlternativo] = useState('');
  const [ResExcecao, setResExcecao] = useState('');
  const [ResGeral, setResGeral] = useState('');

  return (
      <MyContext.Provider value={[ResBasico, setResBasico, ResAlternativo, setResAlternativo, ResExcecao, setResExcecao, ResGeral, setResGeral]}>
        <div>
          <BrowserRouter>
              <Routes>
                  <Route element={<Home/>} path="/"/>
                  <Route  element={<CaseTest/>} path="/casetest"/>
              </Routes>
          </BrowserRouter>
        </div>
      </MyContext.Provider>
  )
}

export default App;
