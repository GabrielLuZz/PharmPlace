import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
from {
    transform: scale(0.2);
}

to {
    transform: scale(1);
}
`;

const disapear = keyframes`
from {
    transform: scale(1);
}

to {
    transform: scale(0);
}
`;

export const StyledShowProduct = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  z-index: 3;

  .modal {
    width: 100%;
    max-width: 750px;
    min-height: 450px;
    border-radius: 10px;
    background-color: var(--white);
    display: flex;
    animation-duration: 0.6s;
    ${(props) =>
      props.animation === true
        ? css`
            animation-name: ${appear};
          `
        : css`
            animation-name: ${disapear};
          `}
  }

  .imageArea {
    width: 300px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 100%;
      height: 310px;
      object-fit: contain;
    }
  }

  .bar {
    min-width: 2px;
    height: 400px;
    background-color: var(--primary);
    align-self: center;
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .back {
    height: 50px;
    display: flex;
    justify-content: end;
    padding-right: 30px;
    padding-top: 10px;

    span {
      transform: rotateY(180deg);
      font-size: 40px;
      cursor: pointer;
    }
  }

  .infoArea {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px;
    justify-content: space-evenly;
    color: #000;
    max-height: 430px;

    & p {
      font-weight: 500;
      color: var(--grey2);
      font-size: 16px;
      font-size: 30px;

      word-break: break-all;
    }

    & span {
      font-weight: 500;
      color: var(--primary);
      font-size: 25px;
    }

    & button {
      background-color: var(--green);
      color: var(--white);

      font-family: var(--second-font);
      font-weight: 600;
      font-size: 18px;

      border-radius: 10px;
    }
  }
`;
