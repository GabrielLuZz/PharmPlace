import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  position: relative;

  h2 {
    width: 100%;
    margin-bottom: 30px;
  }

  .controls {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
    height: 80%;

    .left {
      font-size: 40px;
      z-index: 1;
    }

    .right {
      font-size: 40px;
      z-index: 1;
    }
  }

  .list {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px;
    padding: 20px 0px;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
