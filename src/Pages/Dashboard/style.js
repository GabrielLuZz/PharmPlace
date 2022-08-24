import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background-color: var(--orange);

  button {
    background-color: var(--orange);
    color: var(--white);
    opacity: calc(0.6);
  }

  button:hover {
    opacity: calc(1);
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 200px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
`;

export const Identify = styled.div`
  .identify {
    width: 100%;
    height: 80px;
    padding: 10px;
    margin-top: 200px;

    background-color: var(--primary);

    border-top: 0.5px solid var(--grey);
    border-bottom: 0.5px solid var(--grey);

    margin-top: 15px;
    margin-bottom: -10px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    > div {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;

      .namePharma {
        color: var(--white);

        font-family: var(--main-font);
        font-size: 24px;
        font-weight: bold;

        margin-left: 20px;
      }

      .imgPharma {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        border: 2px solid var(--grey);
      }
    }
  }

  section {
    .allButton,
    .homeButton {
      background-color: transparent;
      color: var(--white);
    }
  }
`;
