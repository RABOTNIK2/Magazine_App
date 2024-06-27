import {Stack,Card} from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './Profile.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h2 className="nadpis">Вход</h2>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Ваше Имя' id='formControlLg' type='name' size="lg"/>
              <MDBInput wrapperClass='mb-2 mx-5 w-100' labelClass='text-white' label ='Ваш Пароль' id='formControlLg' type='password' size="lg"/>
              <MDBBtn color='dark' size='lg' className='button'><p className='stiltexta2'>Регистрация</p></MDBBtn>

              <div>
                <p className="mb-0">Нет аккаунта? <a href="#!" class="text-white-50 fw-bold"><Link to="/profile">Зарегистрируйтесь</Link></a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;