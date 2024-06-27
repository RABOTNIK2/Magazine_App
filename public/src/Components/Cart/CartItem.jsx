import { useState } from "react";

function CartItem(tea) {

  const [value, setValue] = useState(0)



    return <div className="CartItem">
    <img src={tea.img} id="CartItemImg" />
    <div className="Itemtext">
      <p>{tea.name}</p>
      <p><b>{tea.cost}</b></p>
    </div>
    <div className="RemoveButton">
      <img src="img/CloseButton.svg"/>
    </div>
    <div className="CountButtons">
      <img src="img/Add.png" onClick={()=> setValue(value+1)} />
      <input type="text" maxLength="2" value={value} onChange={event => setValue(event.target.value)} />
      <img src="img/Remove.png" onClick={()=> setValue(value-1)} />

    </div>
  </div>
    
}

export default CartItem;