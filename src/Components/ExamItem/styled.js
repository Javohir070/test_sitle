import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  min-width: 300px;
  max-width: 470px;
  padding: 20px;
  background-color: var(--modalBack);
  box-shadow: var(--shadow);
  margin: 10px 10px;
  border-radius: 15px;
  flex-direction: column;
`;

Container.Title = styled.h1`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: var(--hoverText);
  margin-left: 5px;
  span {
    font-weight: 700;
  }
`;

Container.Type = styled.h1`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: var(--text);
  margin-left: 5px;
  span {
    font-weight: 700;
  }
`;

Container.Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  margin-left: 5px;
  margin-right: 20px;
  div {
    color: var(--hoverText);
    span {
      color: var(--text);
      font-weight: 700;
    }
  }
`;

Container.Desc = styled.p`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: var(--text);
  line-height: 25px;
  margin-left: 5px;
`;
Container.End = styled.div`
  background: var(--backColor);
  color: white;
  text-align: center;
  box-shadow: var(--shadow);
  padding: 10px;
  border-radius: 5px;
`;

Container.History = styled.div`
  margin-left: 5px;
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 700;
  color: var(--backColor);
  font-size: 15px;
  cursor: pointer;
  :hover {
    color: var(--hoverText);
  }
`;
Container.Btn = styled.div`
  background-color: var(--backMode);
  cursor: pointer;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--hoverText);
  font-family: var(--fontFemily);
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  padding: 10px 10px;
  box-shadow: 0px 6px 16px rgba(13, 94, 244, 0.24);
  border-radius: 5px;
  transition: all ease 0.4s;
  border: 2px solid var(--hoverText);
  :hover {
    background-color: var(--hoverText);
    color: white;
  }
`;
