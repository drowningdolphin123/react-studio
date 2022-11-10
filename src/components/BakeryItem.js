// TODO: create a component that displays a single bakery item
import "./BakeryItemCss.css"

export default function BakeryItem(props) {
  return (
    <div className="BakeryItem">
        <img src={props.image} width="300px;"></img>
        <div className="container">
        <b>{props.name}</b> <br></br>
        {props.description} <br></br>
        <u>{props.price}</u>
      </div>
    </div>
  );
}

