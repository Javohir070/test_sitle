import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;

Container.Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

Container.Back = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: var(--text);
  cursor: pointer;
  :hover {
    color: var(--hoverText);
    transition: var(--transition);
  }
`;
Container.Title = styled.h1`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  color: var(--backColor);
  margin-left: 20px;
`;

Container.Info = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 15px;
  padding: 30px;
  border-radius: 10px;
  max-width: 560px;
  margin-bottom: 24px;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  background-color: red;
  color: white;
`;
