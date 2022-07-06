import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding: 10px;

  background-color: var(--primary);

  .button {
    background-color: var(--terciary);
    color: var(--white);
    opacity: 1;

    height: 40px;

    border-radius: 5px;

    font-family: var(--main-font);
    font-size: 16px;
    font-weight: 600;

    margin-left: 20px;

    &:hover {
      background-color: var(--secundary);
      color: var(--white);
    }
  }

  .input {
    outline: 0;
    border: none;

    padding: 10px;

    width: 700px;
    height: 40px;

    color: var(--grey2);
    font-family: var(--main-font);
    font-weight: bold;
    font-size: 18px;
  }
`;
