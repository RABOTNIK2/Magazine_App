import React from "react";
import './Zakazi.css'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const orderData = async () => {
      try {
        let res = await axios.get("http://127.0.0.1:8000/magazine_api/user/get_orders/?id=2");
        setOrder(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    orderData();
  }, []);

  return (
    <section className="vh-100" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h5 className="text-center my-3 pb-3"><p className="text">Ваш Заказ</p></h5>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col"><p className="number">No.</p></th>
                      <th scope="col"><p className="number">Дата Доставки</p></th>
                      <th scope="col"><p className="number">Номер</p></th>
                    </tr>
                  </MDBTableHead>
                  {
                    order.map((Element) => {
                      return (
                        <MDBTableBody>
                          <tr>
                            <th scope="col"><p className="number">{Element.id}</p></th>
                            <th scope="col"><p className="number">{Element.delivery_date}</p></th>
                            <th scope="col"><p className="number">{Element.number}</p></th>
                          </tr>
                        </MDBTableBody>
                      );
                    })
                  }
                  {/* <MDBTableBody>
                    <tr>
                    <th scope="col"><p className="number">{order.id}</p></th>
                    <th scope="col"><p className="number">{order.delivery_date}</p></th>
                    <th scope="col"><p className="number">{order.number}</p></th>
                    </tr>
                  </MDBTableBody> */}
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}