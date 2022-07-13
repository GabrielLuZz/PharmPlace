import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  
  background-image: linear-gradient(
    to bottom,
    #2e3192,
    #3544a0,
    #3f57ae,
    #4b6aba,
    #597dc6
  );

  @media (max-width: 650px) {
    width: 100%;
    height: 350px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    height: 100%;
    width: 50%;

    @media (max-width: 900px) {
      position: absolute;
      max-width: 600px;
      width: 100%;
      height: 50%;
      justify-content: space-around;
    }
  }

  .second {
    @media (min-width: 824px) {
      margin-right: 150px;
    }
  }

  .animation {
    @media (max-width: 900px) {
      opacity: 0.1;
    }
  }

  .text_one {
    width: 100%;

    margin-left: 20%;

    @media (max-width: 670px) {
      margin-left: 5%;
      font-size: 14px;
      width: 360px;
      padding: 0;
    }

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    color: var(--white);

    font-family: var(--second-font);
    font-weight: bold;
    font-size: 28px;

    @media (max-width: 850px) {
      font-size: 18px;
    }
  }

  .text_two {
    width: 100%;
    margin-left: 20%;

    @media (max-width: 670px) {
      margin-left: 5%;
      font-size: 12px;
      width: 340px;
      margin-right: 30px;
    }

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    color: var(--white);

    font-family: var(--main-font);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .text_three {
    width: 100%;
    height: 100px;
    margin-left: 20%;

    @media (max-width: 670px) {
      margin-left: 5%;
      font-size: 12px;
      width: 360px;
    }

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    color: var(--white);

    font-family: var(--main-font);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 1px;

    .button_visit {
      width: 310px;
      height: 50px;

      background-color: var(--redwine);
      color: var(--white);

      opacity: 1;

      font-family: var(--second-font);
      font-weight: 500;
      font-size: 18px;

      @media (max-width: 670px) {
        width: 350px;
        height: 35px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        font-size: 22px;
        letter-spacing: 3.5px;
        transition: 400ms;
      }
    }
  }
`;
