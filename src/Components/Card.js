import "./Card.css";
import Stars from "./Stars";
const Card = (props) => {
  const saleFlag = +props.sale ? true : false;
  return (
    <div className="card-app">
      <div className="card-top">
        {saleFlag && <span className="sale">sale</span>}
      </div>
      <div className="card-bottom">
        <div className="title">{props.title}</div>
        <div className="rating">
          <Stars />{" "}
        </div>
        <div className="price">{props.price}</div>
        <button className="options">{props.option}</button>
      </div>
    </div>
  );
};
export default Card;
