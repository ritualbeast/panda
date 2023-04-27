import React from 'react';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

const Encuestas = () => {
  return (
    
    <div>
        <div className='encuestaContenedorBotones'>
            <div className='encuestaButtonCrear'>
                <button type="button" class="btn btn-primary">Crear encuesta desde cero</button>

            </div>
            <div className='encuestaButtonCrear'>
                <button type="button" class="btn btn-primary">Usa una plantilla predefinida</button>

            </div>

        </div>
        
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Encuesta 1</td>
            <td>01/01/2021</td>
            <td>Activa</td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title={<i className="fas fa-ellipsis-v"></i>}
                variant="outline-primary"
              >
                <Dropdown.Item>Editar</Dropdown.Item>
                <Dropdown.Item>Eliminar</Dropdown.Item>
                <Dropdown.Item>Ver</Dropdown.Item>
                <Dropdown.Item>Duplicar</Dropdown.Item>
                <Dropdown.Item>Compartir</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Encuestas;
