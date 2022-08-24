import styled from "styled-components";

export const StyledCartItem = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--grey);
  display: flex;
  color: var(--grey2);
  padding-bottom: 20px;
  margin-bottom: 25px;

  .imageArea {
    width: 100px;
    text-align: center;
    padding: 0px 20px;

    & img {
      width: 100%;
      height: 70px;
      object-fit: cover;
    }
  }

  .infoArea {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    & p {
      font-family: 400;
    }

    & span {
      color: var(--primary);
      font-weight: 700;
    }

    & .counter {
      display: flex;
      width: 125px;
      color: var(--white);
      align-items: center;

      & .counterMinus {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        cursor: pointer;
      }

      & .counterQt {
        flex: 1;
        height: 25px;
        border-radius: 15px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--grey2);
        margin: 0px 5px;
        font-size: 14px;
        font-weight: 600;
      }

      & .counterPlus {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        cursor: pointer;
      }
    }
  }

  .actionArea {
    width: 20px;
    text-align: center;
    font-size: 20px;

    & span {
      cursor: pointer;
    }
  }
`;
