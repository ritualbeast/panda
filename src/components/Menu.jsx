import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import '../styles/global.css'
import {lista} from '../helpers/lista.ts'



const Menu = () => {
  return (
    <div>
      {lista.map((item) => (
        <Link to={`/${item.nombre.toLowerCase()}`} key={item.nombre}>
          <div>
            <img src= {item.icono} width="50" height="50"/>
          </div>
        </Link>
      ))}
    </div>
  )
  };
  

export default Menu
