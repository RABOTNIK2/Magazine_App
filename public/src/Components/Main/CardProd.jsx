import { useState } from 'react';
import {Card, Stack} from 'react-bootstrap';
import './AllCards.css'

function CardProd(props,{addToFav}) {

  const [addedCart, SetAddedCart] = useState(false)
  const [addFavorite,setFavorite]=useState(false)
  function clickAddButton(newProd){
    SetAddedCart(!addedCart)
    props.addProdToCart(newProd)

  }
  function clickAddToFav(newFav){
    setFavorite(!addFavorite)
    props.addToFav(newFav)

  }



  return (
    <Card className="poleno2">
      <img className="cyka" src={addFavorite ? './img/favorite.png' : './img/uncheked.svg'} onClick={()=> clickAddToFav({id:props.id,name:props.name,cost:props.cost,img:props.img}) } />
      <Card.Img variant="top" src={props.img} className="class1"/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Stack direction="horizontal" gap={3}>
        <div className="bg-light border"><p>Цена:</p><p>{props.cost}</p></div>
        <div className="bg-light border ms-auto">
          <img src={addedCart ? './img/clickedButton.svg' : './img/addButton.svg'} onClick={() => clickAddButton({id:props.id,name:props.name,cost:props.cost,img:props.img})} />
        </div>
    </Stack>
      </Card.Body>
    </Card>
  );
}

export default CardProd;
  