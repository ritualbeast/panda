
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Welcome from './views/Welcome';
import Campana from './views/Campana';
import Encuestas from './views/Encuestas';
import Plantillas from './views/Plantillas';
import Dashboard from './views/Dashboard';
import Contactos from './views/Contactos';
import Reportes from './views/Reportes';

// create a new component called App

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="encuestas" element={<Encuestas />} />
            <Route path="campana" element={<Campana />} />
            <Route path="plantillas" element={<Plantillas />} />
           
            <Route path="contactos" element={<Contactos />} />
            <Route path="reportes" element={<Reportes />} />


          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
