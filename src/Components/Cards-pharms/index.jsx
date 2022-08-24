import { Container } from "./style";
import { Link } from "react-router-dom";
import { MdOutlineLocalPharmacy } from "react-icons/md";

const CardsPharma = ({ pharm }) => {
  const { name, photo, address, id } = pharm;
  return (
    <Link to={`/pharmaProducts/${id}`}>
      <Container
        initial={{ opacity: 0.6, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        /* transition={{ type: "spring", stiffness: 10000, duration: 2 }} */
      >
        <h2 className="pharmaName">{name}</h2>
        <img className="pharmaPhoto" alt={name} src={photo} />
        <p className="pharmaAdress">{address}</p>
        <div className="pharmaSee">
          Ver Farmácia <MdOutlineLocalPharmacy />
        </div>
      </Container>
    </Link>
  );
};

export default CardsPharma;
