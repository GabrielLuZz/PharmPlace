import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  height: 1400px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  > div {
    display: flex;
    width: 350px;
    justify-content: space-between;
    margin-bottom: 30px;

    a {
      display: flex;
      width: 100px;
      justify-content: center;
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
      cursor: pointer;
      opacity: 0.6;
      transition: all ease 0.3s;
      padding: 5px 10px;
      border-radius: 5px;

      &:hover {
        opacity: 1;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--secundary);
    height: auto;
    width: 350px;
    padding: 40px 25px;
    border-radius: 5px;
    justify-content: center;
    gap: 5px;

    label {
      color: var(--white);
      font-size: 20px;
      font-weight: 500;
    }

    input,
    select {
      border: none;
      padding: 8px 10px;
      background-color: var(--fourth);
      color: var(--white);
      opacity: 1;

      ::placeholder {
        color: var(--white);
        opacity: 0.7;
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 2px 0px 20px 0px;
      color: black;
      font-family: var(--main-font);
      font-weight: 400;
    }

    button {
      background-color: var(--orange);
      color: var(--white);
    }
  }
`;
