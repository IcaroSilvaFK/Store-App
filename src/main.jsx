import { StrictMode } from "react";
import { render } from "react-dom";

import { RoutesApplication } from "./routes/routes";
import { FavoriteContextProvider } from "./context/favoriteContext";
import { ProductContextProvider } from "./context/productsContext";
import { CartContextProvider } from "./context/cartContext";
import { PopOutContextProvider } from "./context/popOut";

import "./styles/global.scss";
import { Modal } from "./modal";

render(
  <StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <FavoriteContextProvider>
          <PopOutContextProvider>
            <RoutesApplication />
            <Modal />
          </PopOutContextProvider>
        </FavoriteContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
