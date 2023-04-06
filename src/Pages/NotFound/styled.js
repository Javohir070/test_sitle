import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    width: 500px;
  }
  p {
    font-size: 24px;
    color: var(--text);
    margin-top: 15px;
    span {
      font-family: "Inter";
      color: var(--hoverText);
      font-weight: 800;
      cursor: pointer;
    }
  }
`;
