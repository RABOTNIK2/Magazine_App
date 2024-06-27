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
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer  fluid>
      <div className='body'>
      <MDBRow className='d-flex justify-content-center align-items-center' >
        <MDBCol lg='9' className='my-5'>
        
          <MDBCard>
          <h2 className="nadpis1">Регистрация</h2>
          <form method='POST'>
          <MDBCardBody className='px-4'>

<MDBRow className='align-items-center pt-4 pb-3'>

  <MDBCol md='4' className='ps-5'>
    <h6 className="mb-0"><p className='stiltexta'>Ваше Имя</p></h6>
  </MDBCol>

  <MDBCol md='8' className='pe-5'>
    <MDBInput  size='lg' id='form1'  type='text'/>
  </MDBCol>

</MDBRow>

<hr className="mx-n3" />

<MDBRow className='align-items-center pt-4 pb-3'>

  <MDBCol md='4' className='ps-5'>
    <h6 className="mb-0"><p className='stiltexta'>Пароль </p></h6>
  </MDBCol>

  <MDBCol md='8' className='pe-5'>
  <MDBInput wrapperClass='mb-4'  size='lg' id='form3' type='password'/>
  </MDBCol>

</MDBRow>

<MDBBtn color='dark' size='lg' className='button' ><p className='stiltexta1'>Зарегистрироваться</p></MDBBtn>

</MDBCardBody>
          </form>
            
          </MDBCard>

        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default App;