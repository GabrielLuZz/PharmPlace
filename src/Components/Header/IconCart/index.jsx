import * as React from "react";
import Badge from "@mui/material/Badge";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../Providers/Cart";

export default function SimpleBadge() {
  const { cart } = React.useContext(CartContext);

  const amountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Badge badgeContent={amountTotal} color="primary">
      <FaShoppingCart />
    </Badge>
  );
}
