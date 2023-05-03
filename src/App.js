
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Encuestas from './views/encuestas/Encuestas';
import Dashboard from './views/dashboard/Dashboard';
import Ipn from './views/ipn/Ipn';
import Reportes from './views/Reportes';
import CrearEncuestas from './views/encuestas/CrearEncuestas';
import EliminarEncuestas from './views/encuestas/EliminarEncuestas';
import FormatoEncuesta from './views/encuestas/FormatoEncuesta';
import BancopreguntasEncuestas from './views/encuestas/components/BancopreguntasEncuestas';

// create a new component called App

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="encuesta" element={<Encuestas />} />
            <Route path="encuesta/crearEncuesta" element={<CrearEncuestas />} />
            <Route path="encuesta/eliminarEncuesta" element={<EliminarEncuestas />} />
            <Route path="ipn" element={<Ipn />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="formatoEncuesta" element={<FormatoEncuesta />} />
            <Route path="bancopreguntas" element={<BancopreguntasEncuestas />} />


          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
