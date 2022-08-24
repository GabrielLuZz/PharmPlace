import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import { SectionBox, Identify } from "./style";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";

import { ProductsContext } from "../../Providers/products";
import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../Providers/users";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { AuthContext } from "../../Providers/Auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@userData"))?.isPharmacy;
    if (auth === false) {
      return navigate("/login");
    } else if (auth === undefined && !user) {
      return navigate("/");
    }
  }, []);

  const {
    products,
    inputFilterFunction,
    setInputValue,
    setFilteredProductsDash,
    filterAllWhiteCategory,
  } = useContext(ProductsContext);

  const id = JSON.parse(localStorage.getItem("@userData"))?.id;
  const pharmaProducts = products.filter((prod) => prod.userId === id);
  const { users } = useContext(UsersContext);

  return (
    <>
      <Header style={{ heigth: "500px" }} />

      <Identify>
        {users.map(
          (user) =>
            user.id === id && (
              <div className="identify" key={user.id}>
                <div>
                  <img
                    className="imgPharma"
                    alt="img pharma"
                    src={user.photo}
                  />
                  <h3 className="namePharma">{user.name}</h3>
                </div>
                <section>
                  <Link to={"/"}>
                    <button className="homeButton">Home</button>
                  </Link>

                  <button
                    className="allButton"
                    onClick={() =>
                      filterAllWhiteCategory(
                        pharmaProducts,
                        setFilteredProductsDash
                      )
                    }
                  >
                    Produtos
                  </button>
                </section>
              </div>
            )
        )}
      </Identify>

      <SearchInput
        set={setInputValue}
        func={() =>
          inputFilterFunction(pharmaProducts, setFilteredProductsDash)
        }
      />
      <SectionBox>
        <ModalAdd />
      </SectionBox>
      <CardsDashboard />
      <Footer />
    </>
  );
};

export default Dashboard;
