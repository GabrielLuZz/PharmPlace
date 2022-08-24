import { StyledMiniCard } from "./style";
import { BsCartPlus } from "react-icons/bs";
import formatName from "../../utils/formatName";
import formatPrice from "../../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/products";

const MiniCard = ({ name, image, price, id }) => {
  const { cart, addToCart, toggleDrawer } = useContext(CartContext);
  const { setModalProduct } = useContext(ProductsContext);

  const cartItem = { image, name, price, id, quantity: 1 };

  const handleCardClick = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      setModalProduct({ open: true, product: { image, name, price, id } });
    }
  };

  const handleClick = (event) => {
    if (cart.length === 0) {
      toggleDrawer("right", true, event);
    }

    addToCart(cartItem);
  };

  return (
    <StyledMiniCard onClick={handleCardClick}>
      <div className="imageArea">
        <img src={image} alt={name} />
      </div>
      <div className="infoArea">
        <div className="info">
          <p>{formatName(name)}</p>
          <span>{formatPrice(price)}</span>
        </div>
        <button onClick={handleClick}>
          <BsCartPlus />
        </button>
      </div>
    </StyledMiniCard>
  );
};

export default MiniCard;
