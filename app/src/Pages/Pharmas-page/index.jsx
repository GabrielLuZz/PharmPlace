import CardsPharma from "../../Components/Cards-pharms";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Container, ContainerCards, Titulo } from "./style";
import { UsersContext } from "../../Providers/users";
import { useContext } from "react";

const PharmasPage = () => {
  const { users } = useContext(UsersContext);


  const isPharma = users.filter((item)=>{
    return item.isPharmacy === true
  })  

  return (
    <>
      <Header />
      <Container>
        <Titulo >
          <h1>FARMÁCIAS PARCEIRAS</h1>
        </Titulo>
        <ContainerCards>  
          
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
