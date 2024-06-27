import {Card, Stack,Button} from 'react-bootstrap';
import CardProd from '../Main/AllCards';
import { Route,Routes } from 'react-router-dom';
import { Link, } from "react-router-dom";
import CartItem from '../Cart/CartItem';
import './Profile.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

function Zakladki(props,{Element,id}){
    const[product, setProduct] = useState([])
    const[search, setSearch] = useState([])
    const[categ_search, setCateg_Search] = useState([])
    const[categ_disp, setCateg_Disp] = useState([])
    const[selectt, setSelectt] = useState('')
    useEffect(() => {
        const productData = async () => {
          try {
            let res = await axios.get('http://127.0.0.1:8001/magazine_api/product/')
            setProduct(res.data)
          }catch (error){
            console.log(error);
          }
        }
        productData()
      }, [])

      async function search_prod(){
        let prod = document.querySelector("#prod")

        try {
          let ser = await axios.get('http://127.0.0.1:8001/magazine_api/product/products_search/?q=' + prod.value)
          console.log(ser.data)
          setSearch(ser.data)
        }catch(error) {
          console.log(error);
        }

      }


    useEffect(() => {
      const categData = async () =>{
        try{
          let res = await axios.get('http://127.0.0.1:8001/magazine_api/category/')
          setCateg_Search(res.data)
        }catch(error){
          console.log(error)
        }
      }
      categData()
    }, [])

    async function Category_search(){
      let categ = selectt

      try{
        let res2 = await axios.get('http://127.0.0.1:8001/magazine_api/product/search_by_category/?category=' + categ)
        setCateg_Disp(res2.data)
      }catch(error){
        console.log(error)
      }

    }



      function BaseList(){
        return (
          <>
          {
          product.map(Element =>{
              return (
                  <>
      <MDBContainer fluid key={Element.id} >
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={Element.image}
                        fluid
                        className="w-100"
                      />
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6">
                    <h3>{Element.name}</h3>
                    <h4 className="text-truncate mb-4 mb-md-0">
                    {Element.description}
                    </h4>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">{Element.price}$</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link to="/otzvtovar">
                      <MDBBtn color="primary" size="sm">
                          <p className='textikcard'>{props.id}Подробнее</p>
                      </MDBBtn>
                      </Link>
                      <MDBBtn outline color="primary" size="sm" className="mt-2">
                      <p className='textikcard1'>Добавить в корзину</p>
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
              )
              
          })
        }</>)

      }
    
      function SearchList(){
        return(
        <>
        {
          search.map(Element =>{
            return(
              <MDBContainer fluid key={Element.id} >
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={Element.image}
                        fluid
                        className="w-100"
                      />
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6">
                    <h3>{Element.name}</h3>
                    <h4 className="text-truncate mb-4 mb-md-0">
                    {Element.description}
                    </h4>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">{Element.price}$</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link to="/govno">
                      <MDBBtn color="primary" size="sm">
                          <p className='textikcard'>{props.id}Подробнее</p>
                      </MDBBtn>
                      </Link>
                      <MDBBtn outline color="primary" size="sm" className="mt-2">
                      <p className='textikcard1'>Добавить в корзину</p>
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
            )
          })
        }
      
      </>
        )
      }

      function Categ_List(){
        return(
          <>
          {
            categ_disp.map(Element =>{
              return(
                <MDBContainer fluid key={Element.id} >
          <MDBRow className="justify-content-center mb-0">
            <MDBCol md="12" xl="10">
              <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={Element.image}
                          fluid
                          className="w-100"
                        />
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h3>{Element.name}</h3>
                      <h4 className="text-truncate mb-4 mb-md-0">
                      {Element.description}
                      </h4>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">{Element.price}$</h4>
                      </div>
                      <div className="d-flex flex-column mt-4">
                      <Link to="/govno">
                      <MDBBtn color="primary" size="sm">
                          <p className='textikcard'>{Element.id}Подробнее</p>
                      </MDBBtn>
                      </Link>
                        <MDBBtn outline color="primary" size="sm" className="mt-2">
                        <p className='textikcard1'>Добавить в корзину</p>
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
              )
            })
          }
        
        </>
          )

      }
      
      function Choose_List(){
        if (search.length == 0 && categ_disp.length !=0) {
          console.log(categ_disp)
          return <Categ_List />
        }else if(search.length!=0 && categ_disp.length == 0){
          return <SearchList />
        }else{
          console.log(search)
          return <BaseList />
        }
      }

    return <> <div className="MainContent" style={{paddingLeft:"10px",paddingRight:"10px"}}>
    <Stack direction="horizontal" gap={3} className="class">
        <p style={{color:"white"}} className='headtext'>ALL GOVNO</p>
        <input className='ms-auto' placeholder='Найти товар' id='prod' />
        <button onClick={() => search_prod()}>Искать</button>
        <select className='ms-auto'
        value={selectt}
        onChange={e => setSelectt(e.target.value)}>
          {
            categ_search.map(Element =>{
              return(
                <option value={Element.id}>{Element.name}</option>
              )
            })
          }
        </select>
        <button onClick={() => Category_search()} >Готово</button>
         
    </Stack>
    <Choose_List />
      
    </div> </>;

}
export default function Profile(){
  return (
    <Zakladki fluid key={Element.id}/>
  );
}