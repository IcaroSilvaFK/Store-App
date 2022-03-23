import { useEffect } from "react";

import { Layout } from "../../layout";

export function Products() {
  useEffect(() => {
    document.title = "Store";
  }, []);

  return (
    <Layout>
      <h1>Propducts</h1>
    </Layout>
  );
}
