import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { StyledCart } from "./style";
import cartImage from "../../../Assets/cart-blue.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartItem from "../../CartItem";
import { CartContext } from "../../../Providers/Cart";
import Payment from "./ModalPagamento";
import formatPrice from "../../../utils/formatPrice";

const Cart = () => {
  const { cart, state, toggleDrawer } = React.useContext(CartContext);

  const amountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);
  const amountPrice = cart.reduce((acc, item) => {
    const price = +item.price;
    return acc + price * item.quantity;
  }, 0);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "rigth" || anchor === "bottom" ? "auto" : 380 }}
      role="presentation"
    >
      <StyledCart>
        <div className="head">
          <span
            className="close"
            onClick={(e) => toggleDrawer("right", false, e)}
          >
            <AiOutlineCloseCircle />
          </span>
          <h2 style={{ fontSize: "1.1rem" }}>Carrinho de compras</h2>
          <span className="image">
            <img src={cartImage} alt="" />
            <span>{amountTotal}</span>
          </span>
        </div>
        <div className="body">
          {cart.map(({ image, price, id, name, quantity }) => (
            <CartItem
              image={image}
              price={price}
              name={name}
              key={id}
              quantity={quantity}
              id={id}
            />
          ))}
        </div>
        <div className="cartInfo">
          <div className="valorTotal">
            <div>
              <p>Valor Pedido: </p>
              <p>{formatPrice(amountPrice)}</p>
            </div>

            {amountPrice > 100 ? (
              <div className="frete0">
                <div>
                  <p>Valor frete:</p>
                  <span>R$ 0,00</span>
                </div>
                <div>
                  <p>Valor total: </p>
                  <span>{formatPrice(amountPrice)}</span>
                </div>
              </div>
            ) : (
              <div className="frete">
                <div>
                  <p>Valor frete:</p>
                  <span>R$ 15,00</span>
                </div>
                <div>
                  <p>Valor total:</p>
                  <span>{formatPrice(amountPrice + 15)}</span>
                </div>
              </div>
            )}
          </div>
          <div className="finalizar">
            <Payment />
          </div>
          <button
            className="adicionar"
            onClick={(e) => toggleDrawer("right", false, e)}
          >
            ADICIONAR MAIS ITENS
          </button>
        </div>
      </StyledCart>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={(event) => toggleDrawer(anchor, false, event)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
