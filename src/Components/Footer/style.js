import styled from "styled-components";

export const ThemeFooter = styled.footer`
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  margin-top: 5px;

  > span {
    margin-bottom: 20px;
  }

  > h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    padding-top: 20px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;

    width: 700px;
    margin: 20px 0;
    @media (max-width: 700px) {
      width: 500px;
      padding-left: 80px;
    }
    @media (max-width: 500px) {
      width: 300px;
      padding-left: 0px;
    }

    > li {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      padding: 5px;

      height: 40px;
      min-width: 200px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 0.5px solid var(--secundary);

      cursor: pointer;

      font-family: var(--main-font);
      font-weight: bold;

      &:hover {
        border: 0.5px solid var(--terciary);
        transition: 400ms;
      }

      @media (max-width: 700px) {
        width: 200px;
      }

      @media (max-width: 500px) {
        width: 150px;
      }
      > a {
        text-decoration: none;
        color: var(--white);
        display: flex;
        align-items: center;
        text-align: center;

        &:hover {
          color: white;
        }
        > svg {
          height: 25px;
          width: 25px;
          margin-right: 10px;
        }
      }
    }
  }
`;
