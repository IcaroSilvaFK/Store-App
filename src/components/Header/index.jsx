import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";

import LogoIcon from "../../assets/shoppe.svg";

import "./styles.scss";

export function Header() {
  return (
    <header className="containerHeader">
      <div className="containerHeaderLogo">
        <img src={LogoIcon} alt="Logo ShoesStore" />
        <strong>ShoesStore</strong>
      </div>
      <nav className="containerHeaderNav">
        <ul>
          <li>
            <Link to="/">
              <AiFillHeart size={25} color="#92e3a9" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <RiShoppingCart2Fill size={25} color="#92e3a9" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
