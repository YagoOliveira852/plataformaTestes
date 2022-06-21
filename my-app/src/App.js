/* import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import FluxoBasico from './components/pages/FluxoBasico'
import FluxoAlternativo from './components/pages/FluxoAlternativo'
import FluxoExececao from './components/pages/FluxoExececao'
*/
import CaseTest from './components/Formulario/CaseTest';
import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Container customClass="min-height">
        <CaseTest />
      </Container>
      
    </div>
  )
}

export default App
