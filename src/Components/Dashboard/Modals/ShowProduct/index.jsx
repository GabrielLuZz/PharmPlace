import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../Providers/Cart";
import { ProductsContext } from "../../../../Providers/products";
import formatPrice from "../../../../utils/formatPrice";
import { StyledShowProduct } from "./style";
import { MdOutlineBackspace } from "react-icons/md";
import { set } from "react-hook-form";

const ShowProduct = () => {
  const { cart, addToCart, toggleDrawer } = useContext(CartContext);
  const { modalProduct, setModalProduct } = useContext(ProductsContext);
  const [animation, setAnimation] = useState(true);

  const { image, name, price, id } = modalProduct.product;

  const cartItem = { image, name, price, id, quantity: 1 };

  const handleBackClick = () => {
    setAnimation(false);
    setTimeout(() => {
      setModalProduct({ open: false, product: {} });
      setAnimation(true);
    }, 550);
  };

  const handleClick = (event) => {
    if (cart.length === 0) {
      toggleDrawer("right", true, event);
    }

    addToCart(cartItem);
    handleBackClick();
  };
  return (
    <>
      {modalProduct.open && (
        <StyledShowProduct animation={animation}>
          <div className="modal">
            <div className="imageArea">
              <img src={image} alt={name} />
            </div>
            <div className="bar"></div>
            <div className="bottom">
              <div className="back">
                <span onClick={handleBackClick}>
                  <MdOutlineBackspace />
                </span>
              </div>
              <div className="infoArea">
                <p>{name}</p>
                <span>{formatPrice(price)}</span>
                <button onClick={handleClick}>Comprar</button>
              </div>
            </div>
          </div>
        </StyledShowProduct>
      )}
    </>
  );
};

export default ShowProduct;
