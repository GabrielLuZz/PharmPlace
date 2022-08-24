import { StyledCartItem } from "./style";
import { BsTrash, BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import formatPrice from "../../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const CartItem = ({ image, price, id, name, quantity }) => {
  const { removeFromCart, increaseInCart, decreaseInCart } =
    useContext(CartContext);
  return (
    <StyledCartItem>
      <div className="imageArea">
        <img src={image} alt={name} />
      </div>
      <div className="infoArea">
        <p>{name}</p>
        <span>{formatPrice(price)}</span>
        <div className="counter">
          <div onClick={(e) => decreaseInCart(id, e)} className="counterMinus">
            <BiMinus />
          </div>
          <div className="counterQt">{quantity}</div>
          <div onClick={() => increaseInCart(id)} className="counterPlus">
            <BsPlusLg />
          </div>
        </div>
      </div>
      <div className="actionArea">
        <span onClick={(e) => removeFromCart(id, e)}>
          <BsTrash />
        </span>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
