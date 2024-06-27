import "./Header.css"
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";



function Header(props) {
  let summ = 0
  for (let i = 0; i < props.cart.length; i++) {
    summ += Number(props.cart[i]['cost']);
  }
  

  return<div className="mainHeader"><Stack direction="horizontal" gap={3}>
  <div className='leftHeader'>
    <div className='leftHeaderText'>
    <Link to="/" style={{ textDecoration: 'none' }}><h2 style={{"color": "white"}} className="headContent">Shop Govna</h2></Link>
    </div>
    </div>

    <div className='rightHeader ms-auto'>
    <Link to="cart">
    <img src="/img/Group.svg" width={20} height={20}  className="icons"/>
    </Link>
    <span style={{"color": "#5C5C5C"}}className="icons">{summ}$</span>
    <Link to="/zakladki">
     <img src="/img/zmdi_favorite-outline.svg" width={20} height={20}className="icons"/>
    </Link>
    <Link to="/profile"className="icons">
    <img src="/img/Union.svg" width={20} height={20}className="icons"/>
    </Link>
    </div>
    </Stack>

</div>
  
    
  ;

}
export default Header
