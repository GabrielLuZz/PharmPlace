import styled from "styled-components";

export const StyledMiniCard = styled.div`
  width: 180px;
  height: 250px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: var(--reed);
  display: flex;
  flex-direction: column;
  flex: none;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .imageArea {
    width: 100%;
    height: 65%;
    margin-bottom: 5px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .infoArea {
    flex: 1;
    padding: 0px 18px;

    display: flex;
    justify-content: space-between;

    .info {
      padding: 0px 0px 5px;
      height: 62%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: var(--main-font);
      & p {
        font-weight: 400;
        font-size: 15px;
        margin-bottom: 10px;
      }

      & span {
        font-weight: 500;
        font-size: 14px;
      }
    }

    button {
      font-weight: 600;
      background: transparent;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
