import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  height: 980px;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--secundary);
    height: 350px;
    width: 350px;
    padding: 0px 25px;
    border-radius: 5px;
    justify-content: center;
    gap: 5px;

    label {
      color: var(--white);
      font-size: 20px;
      font-weight: 500;
    }

    input {
      border: none;
      padding: 8px 10px;
      background-color: var(--fourth);
      color: var(--white);

      ::placeholder {
        color: var(--white);
        opacity: 0.7;
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 5px 0px 20px 0px;
      color: black;
      font-family: var(--main-font);
      font-weight: 400;
    }

    button {
      background-color: var(--orange);
      color: var(--white);
    }
  }

  hr {
    margin: 40px 0px;
    width: 350px;
    height: 10px;
    border: none;
    background-color: var(--fourth);
    border-radius: 2px;
  }

  .options {
    display: flex;
    height: 350px;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;

    .cadastroLogin {
      display: flex;
      flex-grow: 2;
      flex-direction: column;
      height: 200px;
      text-align: center;
      gap: 20px;

      h2 {
        color: var(--white);
      }

      a {
        display: flex;
        justify-content: space-between;
        width: 350px;
        align-items: center;
        background-color: transparent;
        border: 2px solid var(--orange);
        color: var(--white);
        cursor: pointer;
        opacity: 0.6;
        transition: all ease 0.3s;
        padding: 10px 20px;
        border-radius: 5px;

        &:hover {
          opacity: 1;
        }

        span {
          svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }

    .home {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;

      h2 {
        background-color: var(--orange);
        color: var(--white);
        width: 150px;
        opacity: 0.6;
        border-radius: 4px;
        transition: all ease 0.3s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    height: 100vh;

    hr {
      height: 350px;
      width: 10px;
      margin: 0px 40px;
    }

    .cadastroLogin {
      height: 300px;
    }
  } ;
`;
