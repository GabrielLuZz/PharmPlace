import { Container } from "./style";
import { RiAttachmentLine, RiHospitalFill } from "react-icons/ri";
import { GiMedicines, GiHealthNormal, GiLipstick } from "react-icons/gi";
import { ImMakeGroup } from "react-icons/im";
import { TbMoodKid } from "react-icons/tb";
import { MdLocalConvenienceStore } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";

const SearchFilter = ({ data, set }) => {
  const { filterWithCategory, filterAllWhiteCategory } =
    useContext(ProductsContext);

  return (
    <Container>
      <Link to={"/pharmas"}>
        <section className="filter">
          <div className="icon">
            <RiHospitalFill />
          </div>
          <span className="name">Farmácias</span>
        </section>
      </Link>

      <section
        onClick={() => filterAllWhiteCategory(data, set)}
        className="filter"
      >
        <div className="icon">
          <HiTemplate />
        </div>
        <span className="name">Todos</span>
      </section>

      <section
        onClick={() => filterWithCategory("saude", data, set)}
        className="filter"
      >
        <div className="icon">
          <GiHealthNormal />
        </div>
        <span className="name">Saúde</span>
      </section>

      <section
        onClick={() => filterWithCategory("beleza", data, set)}
        className="filter"
      >
        <div className="icon">
          <GiLipstick />
        </div>
        <span className="name">Beleza</span>
      </section>

      <section
        onClick={() => filterWithCategory("dermocosmeticos", data, set)}
        className="filter"
      >
        <div className="icon">
          <ImMakeGroup />
        </div>
        <span className="name">Cosméticos</span>
      </section>

      <section
        onClick={() => filterWithCategory("higiene", data, set)}
        className="filter"
      >
        <div className="icon">
          <RiAttachmentLine />
        </div>
        <span className="name">Higiene</span>
      </section>

      <section
        onClick={() => filterWithCategory("medicamentos", data, set)}
        className="filter"
      >
        <div className="icon">
          <GiMedicines />
        </div>
        <span className="name">Medicamentos</span>
      </section>

      <section
        onClick={() => filterWithCategory("infantil", data, set)}
        className="filter"
      >
        <div className="icon">
          <TbMoodKid />
        </div>
        <span className="name">Infantil</span>
      </section>

      <section
        onClick={() => filterWithCategory("conveniencia", data, set)}
        className="filter"
      >
        <div className="icon">
          <MdLocalConvenienceStore />
        </div>
        <span className="name">Conveniência</span>
      </section>
    </Container>
  );
};

export default SearchFilter;
