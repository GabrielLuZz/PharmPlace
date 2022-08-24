import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: #f4f4f4;
  /* display: flex; */
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: auto;

  @media (max-width: 428px) {
    div {
      font-size: 10px;
    }
  }
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .title {
    min-width: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: var(--grey2);
    padding: 5px;
    border-radius: 5px;

    font-family: var(--second-font);
    font-weight: 700;
    font-size: 24px;

    border-bottom: 0.5px solid var(--green);

    svg {
      width: 30px;
      height: 35px;
      margin-left: 15px;
    }
  }
`;

export const ContainerCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  flex-direction: row;

  @media (max-width: 734px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    scroll-behavior: smooth;
  }
`;
