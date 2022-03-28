import { AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

import "./styles.scss";

export function CardProduct({ price, image, title, addCart, addFavorit }) {
  return (
    <li className="containerCard">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        <strong>{price}</strong>
      </div>
      <div className="containerButtons">
        <button onClick={addFavorit}>
          <AiFillHeart color="#E53E3E" size={20} />
        </button>
        <button onClick={addCart}>
          <BsFillCartPlusFill color="#48BB78" size={20} />
        </button>
      </div>
    </li>
  );
}
