import { useContext, useRef } from "react";
import { ProductsContext } from "../../Providers/products";
import Section from "../Section";
import { StyledProductSection } from "./style";

const ProductSection = () => {
  const { products } = useContext(ProductsContext);

  const beautyProducts = products.filter(
    (product) => product.category === "beleza"
  );
  const beleza = useRef(null);

  const kidProducts = products.filter(
    (product) => product.category === "infantil"
  );

  const kid = useRef(null);

  const healthProducts = products.filter(
    (product) => product.category === "higiene"
  );

  const health = useRef(null);

  return (
    <StyledProductSection>
      <section className="area">
        <Section
          title="Destaques para Beleza"
          refe={beleza}
          listProducts={beautyProducts}
        />
        <Section
          title="Confira nossa seção infantil"
          listProducts={kidProducts}
          refe={kid}
        />
        <Section
          title="Mantenha a higiene em dia!!!"
          listProducts={healthProducts}
          refe={health}
        />
      </section>
    </StyledProductSection>
  );
};

export default ProductSection;
