import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";

import { useFavorites } from "../../hooks/useFavorite";
import { useCart } from "../../hooks/useCart";
import { usePopOut } from "../../hooks/usePopOut";

import LogoIcon from "../../assets/shoppe.svg";

import "./styles.scss";

export function Header() {
  const { handleOpenInfos, handleOpenPopOut } = usePopOut();
  const { favorites } = useFavorites();
  const { cartProducts } = useCart();

  function handleOpenCart(cart) {
    handleOpenInfos(cart);
    handleOpenPopOut();
  }

  function handleOpenheart(favorite) {
    handleOpenInfos(favorite);
    handleOpenPopOut();
  }

  return (
    <header className="containerHeader">
      <div className="containerHeaderLogo">
        <img src={LogoIcon} alt="Logo ShoesStore" />
        <strong>ShoesStore</strong>
      </div>
      <nav className="containerHeaderNav">
        <ul>
          <li>
            <button onClick={() => handleOpenheart("Favorite")}>
              <span className={favorites.length > 0 ? "notification" : "none"}>
                {favorites.length > 0 ? favorites.length : ""}
              </span>
              <AiFillHeart size={25} color="#92e3a9" />
            </button>
          </li>
          <li>
            <button onClick={() => handleOpenCart("Cart")}>
              <span className={cartProducts.length > 0 ? "notification" : ""}>
                {cartProducts.length > 0 ? cartProducts.length : ""}
              </span>
              <RiShoppingCart2Fill size={25} color="#92e3a9" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
