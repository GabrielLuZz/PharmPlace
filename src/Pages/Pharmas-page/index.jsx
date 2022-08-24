import CardsPharma from "../../Components/Cards-pharms";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Container, ContainerCards, Titulo } from "./style";
import { UsersContext } from "../../Providers/users";
import { useContext } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const PharmasPage = () => {
  const { users } = useContext(UsersContext);

  const isPharma = users.filter((item) => {
    return item.isPharmacy === true;
  });

  return (
    <>
      <Header />
      <Container>
        <Titulo>
          <h1 className="title">
            FARMÁCIAS PARCEIRAS <FaRegHandshake />
          </h1>
        </Titulo>
        <ContainerCards
          initial={{ opacity: 0.6, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          {isPharma.map((pharm) => (
            <CardsPharma key={pharm.id} pharm={pharm} />
          ))}
        </ContainerCards>
      </Container>
      <Footer />
    </>
  );
};

export default PharmasPage;
