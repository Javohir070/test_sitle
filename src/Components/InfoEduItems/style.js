import styled from "styled-components";

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  path {
    fill: var(--hoverText);
  }
  h1 {
    font-family: "Open Sans", sans-serif, Arial;
    font-size: 45px;
    margin: 10px 0;
    color: var(--hoverText);
  }
  p {
    font-family: "Open Sans", sans-serif, Arial;
    font-size: 24px;
    color: var(--backMode);
  }

  @media (max-width: 960px) {
    width: 150px;
  }
`;
