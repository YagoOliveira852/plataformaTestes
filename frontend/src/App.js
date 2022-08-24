import React from 'react';
import Home from './pages/home/home';
import CaseTest from "./pages/casetest/casetest"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route  element={<CaseTest/>} path="/casetest"/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
