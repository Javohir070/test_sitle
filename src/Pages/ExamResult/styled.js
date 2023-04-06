import styled from "styled-components";

export const Container = styled.div`
  min-width: 250px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--modalBack);
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  h1 {
    font-family: var(--fontFemily);
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: var(--text);
  }
  span {
    color: var(--hoverText);
    font-family: var(--fontFemily);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    font-family: var(--fontFemily);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: var(--modalBack);
    background-color: var(--hoverText);
    height: 35px;
    align-items: center;
    border-radius: 5px;
    :hover {
      transition: var(--transition);
      transform: scale(0.98);
    }
  }
`;
