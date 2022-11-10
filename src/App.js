import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (name, price) => {
    if (cart.length == 0) {
      setTotal(price)
    } else {
      const newTotal = total + price
      setTotal(newTotal)
    }
    cart.push(name)
    console.log(cart)
  }

  const removeFromCart = (name, price) => {
    const index = cart.indexOf(name)
    if (index > -1) {
      cart.splice(index, 1)
    }
    if (cart.length != 0) {
      setTotal(total - price)
    }
    if (cart.length == 0) {
      setTotal(0)
    }
    console.log(cart)
  }

  return (
    <div className="App">
      <div className="left-side">
      <h1>Bug Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

<div className="items">
{bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components 
<div className="card" key={item.name}>
  <BakeryItem {...item} />
  <button className="button" onClick={() => addToCart(item.image, item.price)}>Add</button>
  <button className="button" onClick={() => removeFromCart(item.image, item.price)}>Remove</button>
</div>
))}
</div>

      </div>

      <div className="cart">
        <h2>Cart</h2>
        ${total}
        {cart.map((item, index) => (
          <img className="mini-image" src={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
