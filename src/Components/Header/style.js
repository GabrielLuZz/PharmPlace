import styled from "styled-components";

export const ThemeHeader = styled.header` 

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 0 8vw;
  background-color: #fff;
  transition: 0.3s;

  box-shadow: 1px 6px 9px -1px rgba(82, 80, 80, 0.55);
  -webkit-box-shadow: 1px 6px 9px -1px rgba(82, 80, 80, 0.55);
  -moz-box-shadow: 1px 6px 9px -1px rgba(82, 80, 80, 0.55);

  .content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sticky {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100vw;
    z-index: 99;
    background-color: #fff;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    @media (max-width: 500px) {
      width: 100vw;
    }

    .logo {
      width: 200px;
      height: 90px;
      img {
        width: 100%;
        height: 90px;
      }
      @media (max-width: 500px) {
        width: 169px;
        height: 60px;
        img {
          height: 80px;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 200px;

      @media (max-width: 500px) {
        width: 100px;
      }

      .btnCart,
      .btnUser {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        width: 100px;
        height: 60px;
        font-size: 40px;
        @media (max-width: 500px) {
          width: 70px;
          height: 40px;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          box-shadow: none;
        }
        svg {
          height: 40px;
          width: 40px;
          border: none;
          color: var(--primary);
          @media (max-width: 500px) {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }
`;
