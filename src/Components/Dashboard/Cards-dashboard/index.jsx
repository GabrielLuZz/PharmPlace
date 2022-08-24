import { Container, BoxInfo } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";
import formatPrice from "../../../utils/formatPrice";
import {
  capitalizeFirst,
  capitalizeFirstLowercaseRest,
} from "../../../utils/capitalizeFirst";
import { TbMoodSad } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardsDashboard = () => {
  const id = JSON.parse(localStorage.getItem("@userData"))?.id;
  const { products } = useContext(ProductsContext);
  const pharmaProducts = products.filter(({ userId }) => userId === id);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container data-aos="fade-left">
      {pharmaProducts.length < 1 ? (
        <h2>
          Você ainda não adicionou nenhum produto
          <TbMoodSad size="20px" />
        </h2>
      ) : (
        pharmaProducts?.map((el) => (
          <div className="productsPharm" key={el.id}>
            <div className="imgBox">
              <img src={el.image} alt={el.name} />
            </div>
            <BoxInfo>
              <span className="descProd">
                {capitalizeFirstLowercaseRest(el.name)}
              </span>
              <span>{capitalizeFirst(el.category)}</span>
              <p>{formatPrice(el.price)}</p>
            </BoxInfo>
            <div className="iconsBox">
              <ModalEdit product={el} />
              <ModalDelete product={el} />
            </div>
          </div>
        ))
      )}
    </Container>
  );
};
export default CardsDashboard;
