import { createContext, useState, useEffect } from "react";

import { api } from "../services/axios";

export const ProductContext = createContext({});

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("products");
        console.log(response);
        if (response.data.length <= 0) {
          setLoading(false);
          setNotFound(true);
        }
        if (response.data.length > 0) {
          setLoading(false);
          setProducts(response.data);
        }
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products, notFound, loading, isError }}>
      {children}
    </ProductContext.Provider>
  );
}
