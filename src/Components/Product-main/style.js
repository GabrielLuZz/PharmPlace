import styled from "styled-components";

export const StyledProductMain = styled.main`
  width: 100%;
  padding: 0px 8vw;
  display: flex;
  justify-content: center;

  .area {
    width: 100%;
    padding: 9px 25px;
    gap: 20px 60px;
    height: 850px;
    margin: 30px 0px;
    overflow: auto;

    background-color: var(--white);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .area {
      gap: 30px 20px;
      justify-content: space-between;
    }
  }

  @media (max-width: 510px) {
    .area {
      gap: 30px 10px;
    }
  }

  @media (max-width: 435px) {
    .area {
      padding: 9px;
    }
  }

  @media (max-width: 340px) {
    .area {
      justify-content: center;
    }
  }
`;
