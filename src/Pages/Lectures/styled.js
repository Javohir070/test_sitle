import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin-top: 15px;
  display: flex;
  padding: 15px;
  gap: 15px;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;
Container.Right = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  p {
    padding-left: 15px;
    border-left: 2px solid var(--text);
    font-size: 20px;
    cursor: pointer;
    color: var(--text);
    :hover {
      color: var(--hoverText);
    }
  }
`;

Container.Title = styled.div`
  font-family: var(--fontFemily);
  font-size: 22px;
  text-align: start;
  font-weight: 600;
  color: var(--hoverText);
  margin-bottom: 10px;
`;
