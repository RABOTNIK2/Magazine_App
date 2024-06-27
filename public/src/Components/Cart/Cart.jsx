import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Cart.css";
import Split from "react-split";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

function ReviewPage() {


    const[cart, setCart] = useState([])
    const[pomogat_list, setList]= useState([])
    const[help_list, setHelp] = useState([])
    useEffect(() => {
        const cartData = async () => {
          try {
            let res = await axios.get('http://127.0.0.1:8000/magazine_api/user/2/')
            setCart(res.data.cart);
            setList(res.data.cart);
          }catch (error){
            console.log(error);
          }
        }
        cartData()
      }, [])
      // let gg = cart[0].split(", ")
      // setList(gg)
      // console.log(cart[0])
// cart.map(Element =>{
    
// })
  return <>(
    <section className="vh-100">
      <MDBContainer className="container">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Корзина </span>
            </p>

            {
              pomogat_list.map(help_list =>{
                help_list = help_list.split(", ")
                return(
                  <MDBCard className="mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="align-items-center">
                    
                      <MDBCol md="2">
                        <MDBCardImage
                          fluid
                          src={help_list[1]}
                          alt="Generic placeholder image"
                        />
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Описание</p>
    
                          <p className="lead fw-normal mb-0">{help_list[2]}</p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Название</p>
                          <p className="lead fw-normal mb-0">{help_list[0]}</p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Price</p>
                          <p className="lead fw-normal mb-0">{help_list[3]}$</p>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                )
              
              })
              
            }
            
             

            

           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
  </>
}
export default ReviewPage