import styled from "styled-components";

export const ContainerAll = styled.div`
  .btnPag {
    color: var(--white);
  }
`;

export const Pix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    height: 250px;
  }

  button {
    background-color: #2e3192;
    color: white;
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 320px;
    height: 200px;
  }

  button {
    background-color: #2e3192;
    color: white;
    font-size: 1.1rem;
  }
`;
