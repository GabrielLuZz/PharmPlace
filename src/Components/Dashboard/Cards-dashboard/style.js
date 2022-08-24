import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  .productsPharm {

    width: 350px;
    height: 200px;
    margin: 20px;
    display: flex;
    border-left: 2px solid var(--primary);
    background-color: var(--white);
    border-radius: 10px;
    transition: 0.5s;
  }
  .productsPharm:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: var(--terciary);
  }

  .imgBox {
    width: 90px;
    height: 90px;
    background-color: #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-left: 10px;
    border-radius: 8px;
  }

  .imgBox img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
  }

  .iconsBox {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;

    .productsPharm {
      width: 400px;
      height: 190px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

export const BoxInfo = styled.div`
  width: 200px;
  height: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 25px;

  .descProd {
    font-size: 15px;
    color: var(--fourth);
  }

  span {
    margin-top: 25px;
    color: var(--orange);
  }

  p {
    margin-top: 16px;
    color: var(--redwine);
  }
`;
