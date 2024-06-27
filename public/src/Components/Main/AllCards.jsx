import {Card, Stack} from 'react-bootstrap';
import CardProd from './CardProd';
import './AllCards.css'

function AllCards({addProdToCart, addToFav}) {
    

    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3} className="class">
            <h1 style={{color:"white"}} className='headtext'>ALL GOVNO</h1>

            <input className="ms-auto" />
        </Stack>

 


</div>
    );
}

export default AllCards;