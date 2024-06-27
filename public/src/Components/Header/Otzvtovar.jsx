import {FaStar} from 'react-icons/fa';
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
import "./Otzvtovar.css";
import axios from 'axios';
import {useEffect, useState} from 'react';


const StarRating = () =>  {
    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);
    const[prod, setProduct] = useState([])
    const[review, setReview] = useState([])
    const[help_list, setHelpList] = useState([])

    useEffect(() => {
        const prodData = async () => {
            try{
                let res = await axios.get('http://127.0.0.1:8000/magazine_api/product/3/')
                setProduct(res.data)
            }catch(error){
                console.log(error);
            }
        }
        prodData()

    }, [])

    useEffect(() => {
        const reviewData = async () => {
            try{
                let res2 = await axios.get('http://127.0.0.1:8000/magazine_api/product/get_all_reviews/?id=3')
                setReview(res2.data)
                console.log(res2.data)
            }catch(error){
                console.log(error);
            }
        }
        reviewData()

    }, [])

  return (
    <>
    <MDBContainer className="container"fluid>
      <MDBRow className="justify-content-center mb-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={prod.image}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{prod.name}</h5>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>
                        {prod.category}
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                  {prod.description}
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">{prod.price}$</h4>
                  </div>
                  <h6 className="text-success">★ {prod.rating}</h6>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <h1 className="otzvhead">Отзывы к </h1>
    <div className="mainContentik">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <MDBCard>
            {
                review.map(help_list => {
                  // help_list.author = help_list.author.split(', ')
                  console.log(help_list.author)
                    return (
                        <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                >
                  <img
                    src={help_list.author[1]}
                    className="img"
                    width="149"
                    height="149"
                  />
                </MDBCol>
                <MDBCol lg="8">
                  {" "}
                  <p className="fw-bold lead mb-2">
                    <strong><p className="still">{help_list.author[0]}</p></strong>
                  </p>
                  <p className="fw-bold text-muted mb-0"><p className="still1">{help_list.content_review}</p></p>
                </MDBCol>
              </MDBRow>
              <MDBBtn color='dark' size="sm" className='button'><p className='stiltexta1'>Изменить</p></MDBBtn>
              <MDBBtn color='dark' size="sm"  className='button'><p className='stiltexta1'>Удалить</p></MDBBtn>
              <div className="stars">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i +1;

            return (
             <label>
                <input 
                type="radio"
                name="rating"
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                />
                <FaStar 
                className='star' 
                color={ratingValue <= (hover || rating) ? "#ffc107": "#898176"}
                size={35}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                 />
             </label>  
            )
        })}
    </div>
            </MDBCardBody>

                    )
                })
            }
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    </>
  );
}

export default StarRating;