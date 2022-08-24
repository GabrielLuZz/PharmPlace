import { useContext } from "react";
import { ProductsContext } from "../../Providers/products";
import ProductCard from "../ProductCard";
import { StyledProductMain } from "./style";
import { motion } from "framer-motion";

const ProductMain = () => {
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <StyledProductMain>
      <motion.section
        className="area"
        
      >
        {filteredProducts?.map(({ image, name, price, id }) => (
          <ProductCard
            key={id}
            image={image}
            name={name}
            price={price}
            id={id}
          />
        ))}
      </motion.section>
    </StyledProductMain>
  );
};

export default ProductMain;
