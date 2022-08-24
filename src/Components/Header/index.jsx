import { ThemeHeader } from "./style";
import Logo from "../../Assets/Logo2.png";
import MenuPopupState from "./Menu";
import { Link } from "react-router-dom";
import CustomizedBadges from "./IconCart";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import Cart from "../../Components/Home/Cart";
import ShowProduct from "../Dashboard/Modals/ShowProduct";

const Header = () => {
  const { cart, toggleDrawer } = useContext(CartContext);

  const handleOpen = (event) => {
    if (cart.length > 0) {
      toggleDrawer("right", true, event);
    }
  };

  window.onscroll = function () {
    const header = document.querySelector("#header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  return (
    <ThemeHeader id={"header"}>
      <Cart />
      <ShowProduct />
      <div className="header">
        <div className="content">
          <Link to={"/"}>
            <figure className="logo">
              <img alt="logo" src={Logo} />
            </figure>
          </Link>
          <div className="buttons">
            <div className="btnUser">
              <MenuPopupState />
            </div>
            <div className="btnCart">
              <button onClick={handleOpen} className="btnCart">
                <CustomizedBadges />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeHeader>
  );
};

export default Header;
