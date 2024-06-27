import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Profilereg.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function EditButton() {

  const[user, setUser]= useState([])
  useEffect(()=> {
    const userData = async () =>{
      try{
        let res = await axios.get('http://127.0.0.1:8000/magazine_api/user/1/')
        setUser(res.data)
      }catch(error){
        console.log(error)
      }
    }
    userData()
  }, [])
  return (
    <div >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={user.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5" className='name'>{user.login}</MDBTypography>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
              <MDBBtn outline color="dark" style={{height: '60px', overflow: 'visible'}} className='buttonprofile'>
                <p className='textprofile'>Выйти</p>
              </MDBBtn>
              <Link to="swapprofile">
              <MDBBtn outline color="dark" style={{height: '60px', overflow: 'visible'}} className='buttonprofile1'>
                <p className='textprofile'>Изменить профиль</p>
              </MDBBtn>
              </Link>
              <Link to="zakazi">
              <MDBBtn outline color="dark" style={{height: '60px', overflow: 'visible'}} className='buttonprofile1'>
                <p className='textprofile'>Просмотреть свои заказы</p>
              </MDBBtn>
              </Link>
              <MDBBtn outline color="dark" style={{height: '60px', overflow: 'visible'}} className='buttonprofile2'>
                <p className='textprofile'>Удалить профиль</p>
              </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}