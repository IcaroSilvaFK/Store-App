import { useContext } from "react";

import { ProductContext } from "../context/productsContext";

export function useProduct() {
    const data = useContext(ProductContext);

    return data;
}