
import "./Otzv.css"
import {FaStar} from 'react-icons/fa';
import React, {useState} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

const StarRating = () =>  {
  const[rating, setRating] = useState(null);
  const[hover, setHover] = useState(null);
  return (
    <MDBContainer
      fluid
      className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
    >
    <div className="mainContentik">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    className="img"
                    width="149"
                    height="149"
                  />
                </MDBCol>
                <MDBCol lg="8">
                  {" "}
                  <p className="fw-bold lead mb-2">
                    <strong><p className="still">Korov</p></strong>
                  </p>
                  <p className="fw-bold text-muted mb-0"><p className="still1">KKorovKorovKorovKorovKorovKorovKorovorov</p></p>
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
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
  );
}
export default StarRating;