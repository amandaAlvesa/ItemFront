import './App.css'
import CardEditar from './components/card/cardEditar';
import { Inicio } from './pages/inicio';

import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';

interface ContactProps {
  path: string;
}

const Contact: React.FC<ContactProps> = ({ path }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Página de Contato</h2>
      <button onClick={() => navigate('/about')}>Ir para Sobre</button>
    </div>
  );
};
function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/editar/:id" element={<CardEditar />}></Route>
        </Routes>
      </Router>   
  )
}

export default App
