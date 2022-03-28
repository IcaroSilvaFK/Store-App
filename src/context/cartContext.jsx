import { useEffect, useState, createContext } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCardProducts] = useState([]);

  useEffect(() => {
    const cartLocal = localStorage.getItem("cart");

    if (cartLocal !== null) {
      setCardProducts(JSON.parse(cartLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function handleAddProductCart(product) {
    const newProduct = {
      ...product,
      quantid: 1,
    };
    const data = cartProducts.find((element) => element.id === product.id);
    if (!!data === false) {
      setCardProducts([...cartProducts, newProduct]);
    }

    // TODO Adcionar quantidade quando usuario clicar no carrionho
    // if (!!data) {
    //   const newQuantid = cartProducts.map((element) =>
    //     element.id === product.id
    //       ? {
    //           ...element,
    //           quantid: element.quantid + 1,
    //           price: element.price + element.price / element.quantid,
    //         }
    //       : element
    //   );
    // }
  }

  function handleRemoveProductCart(id) {
    const newCart = cartProducts.filter((element) => element.id !== id);
    setCardProducts(newCart);
  }

  function handleAddNewQuantid(id) {
    const newQuantid = cartProducts.map((element) =>
      element.id === id
        ? {
            ...element,
            quantid: element.quantid + 1,
            price: element.price + element.price / element.quantid,
          }
        : element
    );
    setCardProducts(newQuantid);
  }

  function handleRemoveQuantid(id) {
    const newQuantid = cartProducts.map((element) =>
      element.id === id
        ? {
            ...element,
            quantid: element.quantid > 1 ? element.quantid - 1 : 1,
            price:
              element.quantid > 1
                ? element.price - element.price / element.quantid
                : element.price,
          }
        : element
    );
    setCardProducts(newQuantid);
  }

  return (
    <CartContext.Provider
      value={{
        handleAddProductCart,
        handleRemoveProductCart,
        cartProducts,
        handleAddNewQuantid,
        handleRemoveQuantid,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/*
  {
      ...product,
      quantid: 1,
    };
*/
