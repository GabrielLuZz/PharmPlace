import { createContext, useState } from "react";
import React from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@Pharma:cart")) || []
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: JSON.parse(localStorage.getItem("@Pharma:open")) || false,
  });

  const toggleDrawer = (anchor, open, event) => {
    localStorage.setItem("@Pharma:open", JSON.stringify(open));

    if (!anchor)
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

    setState({ ...state, [anchor]: open });
  };

  const addToCart = (cartItem) => {
    const isThere = cart.findIndex((item) => item.id === cartItem.id);
    if (isThere >= 0) {
      cart[isThere].quantity += 1;
      setCart([...cart]);
      localStorage.setItem("@Pharma:cart", JSON.stringify([...cart]));
    } else {
      toast.success("Item Adicionado ao Carrinho");
      setCart([...cart, cartItem]);
      localStorage.setItem("@Pharma:cart", JSON.stringify([...cart, cartItem]));
    }
  };

  const removeFromCart = (id, event) => {
    const newCart = cart.filter((item) => item.id !== id);

    const amountTotal = newCart.reduce((acc, item) => acc + item.quantity, 0);
    if (amountTotal < 1) {
      toggleDrawer("right", false, event);
    }
    toast.success("Item Removido do Carrinho");

    setCart(newCart);
    localStorage.setItem("@Pharma:cart", JSON.stringify(newCart));
  };

  const increaseInCart = (id) => {
    const positionItem = cart.findIndex((item) => item.id === id);
    cart[positionItem].quantity++;
    setCart([...cart]);
    localStorage.setItem("@Pharma:cart", JSON.stringify([...cart]));
  };

  const decreaseInCart = (id, event) => {
    const positionItem = cart.findIndex((item) => item.id === id);
    cart[positionItem].quantity--;

    if (cart[positionItem].quantity < 1) {
      removeFromCart(id, event);
    } else {
      setCart([...cart]);
      localStorage.setItem("@Pharma:cart", JSON.stringify([...cart]));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        state,
        toggleDrawer,
        addToCart,
        removeFromCart,
        increaseInCart,
        decreaseInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
