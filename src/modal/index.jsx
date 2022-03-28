import { useEffect, useState } from "react";

import { usePopOut } from "../hooks/usePopOut";
import { useFavorites } from "../hooks/useFavorite";
import { useCart } from "../hooks/useCart";

import { MdDelete } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { FcMinus } from "react-icons/fc";
import { FaHeartBroken } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss";

export function Modal() {
  const { infos, popOut, handleClosePopOut } = usePopOut();
  const {
    cartProducts,
    handleAddNewQuantid,
    handleRemoveProductCart,
    handleRemoveQuantid,
    handleAddProductCart,
  } = useCart();
  const { favorites, handleRemoveFavorite } = useFavorites();

  function valueCard() {
    const value = cartProducts.reduce((acc, element) => {
      return element.price;
    });
    console.log(value);
  }
  useEffect(() => {
    valueCard();
  }, []);
  if (popOut) {
    return (
      <div className="popout">
        <div className="containerInfo">
          <button className="closeModal" onClick={handleClosePopOut}>
            <AiOutlineClose size={20} color="#fff" />
          </button>
          {infos === "Favorite"
            ? favorites.map((element) => (
                <div key={element.id} className="card">
                  <div>
                    <img src={element.image} alt={element.title} width={150} />
                  </div>
                  <div className="containerTitle">
                    <strong>{element.title}</strong>
                    <strong>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(element.price)}
                    </strong>

                    <div className="containerButtonsFavorite">
                      <button onClick={() => handleAddProductCart(element)}>
                        <BsBagCheckFill color="#48BB78" size={20} />
                      </button>
                      <button onClick={() => handleRemoveFavorite(element.id)}>
                        <FaHeartBroken color="#E53E3E" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : cartProducts.map((element) => (
                <div key={element.key} className="card">
                  <div>
                    <img src={element.image} alt={element.title} width={150} />
                  </div>
                  <div className="containerInformation">
                    <strong>{element.title}</strong>
                    <div className="containerButtons">
                      <div className="containerbuttonprincipais">
                        <button
                          onClick={() => handleRemoveProductCart(element.id)}
                        >
                          <MdDelete size={20} color="#E53E3E" />
                        </button>
                      </div>
                      <div>
                        <p>
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(element.price)}
                        </p>
                      </div>
                      <div className="addquantid">
                        {element.amount > element.quantid ? (
                          <button
                            onClick={() => handleAddNewQuantid(element.id)}
                          >
                            <BsPlusLg size={10} />
                          </button>
                        ) : (
                          ""
                        )}
                        <p>{element.quantid}</p>
                        {element.quantid > 0 ? (
                          <button
                            onClick={() => handleRemoveQuantid(element.id)}
                          >
                            <FcMinus size={10} />
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <></>
    </>
  );
}

const message = `Hello well be very welcome to my profile`;
console.log(message + "Thank you for your attention");
