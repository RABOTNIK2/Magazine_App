import { useState, useEffect } from "react";
import './SideCart.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem'
import axios from "axios";

function SideCart(props) {
  const[cart, setCart] = useState([])
  const [gold, setNewPage] = useState(false)

  useEffect(() => {
    const cartData = async () => {
      try {
        let res = await axios.get('http://127.0.0.1:8000/magazine_api/user/1/')
        setCart(res.data.cart)
      }catch (error){
        console.log(error);
      }
    }
    cartData()
  }, [])

  let cards = props.cart.map(tea => {
    return <><CartItem cost={tea.cost} name={tea.name} img={tea.img} /></>
  })
  let styleOverflow = {}
  let styleSideBlock = {}
  if (props.openCart === true) {
    styleOverflow = { width: "100%" };
    styleSideBlock = { width: "385px" };

  } else {
    styleOverflow = { width: "0" }
    styleSideBlock = { width: "0" }
  }
  let summ = 0
  for (let i = 0; i < props.cart.length; i++) {
    summ += Number(props.cart[i]['cost']);
  }

  let content = gold ? <div className="CartItems" id="puki">
    <div className="CartItem" id="kaki">
      <img src="img/XUYYYYY.png" id="zabiyki" />

    </div>
  </div> : <div><Stack direction="horizontal" gap={3} id="topCart">

    <div className="element ms-auto"><img src="img/CloseButton.svg" onClick={() => props.onOpenCart(!props.openCart)} /></div>
  </Stack>
    <div className="CartItems">
      {cards}
    </div>

    <div className="pizdec">
      <div className="content">
        <h4>Итого: ...............{summ} Р</h4>
        <h4>Налог 39%: ..............{Math.round(summ * 10/100)} Р</h4>
        <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Оформить заказ</Button>
      </div>
    </div>

  </div>
  let jamal =props.cart+props.cart;

  if (jamal==0) {
    jamal = <div className="CartItems" id="puki">
      <div className="CartItem" id="kaki">

      </div>
    </div>

  } else {
    jamal=<> {content}</>

  }











  return <div className="MainCart">
    <div className="Overflow" style={styleOverflow} onClick={() => props.onOpenCart(!props.openCart)}></div>
    <div className="SideBlock" style={styleSideBlock}>
      {cart}



    </div>
  </div>


    ;

}

export default SideCart;
