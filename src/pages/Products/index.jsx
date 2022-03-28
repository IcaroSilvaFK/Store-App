import { useEffect } from "react";

import { Layout } from "../../layout";
import { NotFound } from "../../components/NotFound";
import { ErrorComponent } from "../../components/Error";

import { useFavorites } from "../../hooks/useFavorite";
import { useProduct } from "../../hooks/useProduct";
import { CardProduct } from "../../components/CardProduct";
import { useCart } from "../../hooks/useCart";

import { usePopOut } from "../../hooks/usePopOut";

import "./styules.scss";

export function Products() {
  const { handleAddNewFavorite } = useFavorites();
  const { products, notFound, loading, isError } = useProduct();
  const { handleAddProductCart } = useCart();
  const {} = usePopOut();
  useEffect(() => {
    document.title = "Store";
  }, []);

  if (isError) {
    return (
      <Layout>
        <ErrorComponent />
      </Layout>
    );
  }

  if (notFound) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="containerproducts">
        {products.map((element) => (
          <CardProduct
            key={element.id}
            title={element.title}
            image={element.image}
            price={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(element.price)}
            addFavorit={() => handleAddNewFavorite(element)}
            addCart={() => handleAddProductCart(element)}
          />
        ))}
      </ul>
    </Layout>
  );
}
