import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 500px) {
    justify-content: flex-start;

    .filter {
      margin-right: 10px;
    }
  }
  a {
    color: black;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 0.8px solid var(--grey);
  border-bottom: 0.8px solid var(--grey);

  max-width: 100%;
  overflow-y: hidden;

  .filter {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 65px;
    height: 95px;

    .icon {
      background-color: var(--white);
      width: 55px;
      height: 55px;

      padding: 5px;
      border-radius: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: 400ms;

      box-shadow: 1px 1px 26px -11px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 26px -11px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 26px -11px rgba(0, 0, 0, 0.75);

      svg {
        width: 30px;
        height: 30px;
        color: var(--primary);
        transition: 400ms;
      }

      &:hover {
        width: 65px;
        height: 65px;
        border-radius: 65px;

        svg {
          width: 40px;
          height: 40px;
        }
      }
    }

    .name {
      font-family: var(--main-font);
      font-size: 13px;
      font-weight: bold;
      margin-top: 5px;
    }
  }
`;
