import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--secundary);
  height: auto;
  padding: 25px 20px;
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
    margin: 2px 0px 20px 0px;
    color: black;
    font-family: var(--main-font);
    font-weight: 400;
  }

  button {
    background-color: var(--orange);
    color: var(--white);
  }
`;
