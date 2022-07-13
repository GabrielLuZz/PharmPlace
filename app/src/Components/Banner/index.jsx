import { Container } from "./style";
import Pharmacist from "../../Assets/LottieJson/Pharmacist.json";
import Shipping from "../../Assets/LottieJson/Shipping.json";
import Sale from "../../Assets/LottieJson/Sale.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper.css";

const BannerArea = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/login");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pharmacist,
  };

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: Shipping,
  };

  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: Sale,
  };

  const settings = {
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,
    loop: true,
  };
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      <SwiperSlide>
        <Container>
          <div className="box">
            <section className="text_one">
              <h3>
                Cadastre sua empresa e receba milhares de visitas na Pharma
                Place
              </h3>
            </section>
            <section className="text_two">
              <p>
                O lugar certo para obter mais visibilidade e aumentar as vendas
                com o menor custo
              </p>
            </section>
            <section className="text_three">
              <p>Cadastro simplificado e gratuito</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie options={defaultOptions} width="600px" height="600px" />
          </section>
        </Container>
      </SwiperSlide>

      <SwiperSlide>
        <Container>
          <div className="box second">
            <section className="text_one">
              <h3>
                Frete Grátis para todo o Brasil em compras a partir de R$ 99,90
              </h3>
            </section>
            <section className="text_two">
              <p>
                Acompanhe o andamento do seu pedido bem como o rastreamento de
                forma simplificada
              </p>
            </section>
            <section className="text_three">
              <p>Faça seu cadastro e não perca</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie
              options={defaultOptionsTwo}
              width="450px"
              height="450px"
              margin-left="20px"
            />
          </section>
        </Container>
      </SwiperSlide>

      <SwiperSlide>
        <Container>
          <div className="box three">
            <section className="text_one">
              <h3>Todo o site com 10% OFF e Frete Grátis na primeira compra</h3>
            </section>
            <section className="text_two">
              <p>
                Cadastre-se e receba 10% OFF na sua primeira compra em qualquer
                uma de nossas farmácias parceiras
              </p>
            </section>
            <section className="text_three">
              <p>Cadastro simplificado e gratuito</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie
              options={defaultOptionsThree}
              width="600px"
              height="600px"
            />
          </section>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerArea;
