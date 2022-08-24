import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;
  height: 300px;

  margin-bottom: 47px;
  margin-top: 31px;
  margin-left: 28px;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  background-color: var(--white);

  .pharmaName {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 10px;

    color: var(--grey2);
    font-family: var(--main-font);
    font-weight: 600;

    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pharmaPhoto {
    display: flex;
    object-fit: contain;

    margin: auto;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;

    height: 162px;
    width: 270px;
  }

  .pharmaAdress {
    color: var(--grey2);
    font-family: var(--main-font);
    font-weight: 500;
    margin-left: 15px;
    margin-bottom: 10px;

    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pharmaSee {
    width: 100%;
    height: 45px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    background-color: var(--terciary);
    color: var(--white);

    font-family: var(--main-font);
    font-size: 16px;
    font-weight: 600;
    border-radius: 0px 0px 10px 10px;

    svg {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }

    &:hover {
      background-color: var(--primary);
      transition: 400ms;
    }
  }
`;
