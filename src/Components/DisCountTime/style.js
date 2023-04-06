import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  height: fit-content;
  background-color: var(--modalBack);
  border-radius: 5px;
  box-shadow: var(--shadow);
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin: 0;
    text-align: center;
  }
  h4 {
    color: red "!important";
    font-family: var(--fontFemily);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }
`;
