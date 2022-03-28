import { useContext } from "react";

import { CartContext } from "../context/cartContext";

export function useCart() {
    const data = useContext(CartContext);

    return data;
}