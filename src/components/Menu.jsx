import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import '../styles/global.css'


const Menu = () => {
    return (
      <Row>
        <Col xs={2} 
         className="menu">
          <Link to="/" className="item">
            Dashboard
          </Link>
            <Link to="/encuestas" className="item">
            Encuesta
            </Link>
          <Link to="/campana" className="item">
            Campaña
          </Link>
          <Link to="/plantillas" className="item">
            Plantillas
          </Link>
          <Link to="/contacto" className="item">
            Contacto
          </Link>
          <Link to="/reporte" className="item">
            Reporte
          </Link>
        </Col>

      </Row>
    );
  };
  

export default Menu
