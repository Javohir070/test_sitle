import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  @media (max-width: 560px) {
    padding: 10px;
  }
`;

Container.Title = styled.div`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: var(--backColor);
`;
Container.Desc = styled.div`
  font-family: var(--fontFemily);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--text);
  margin-top: 20px;
`;
Container.Time = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    div {
      position: static;
    }
  }
`;
Container.Type = styled.div`
  font-family: var(--fontFemily);
  font-weight: 600;
  font-size: 18px;
  color: var(--hoverText);
`;

Container.Wrap = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 10px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  gap: 20px;
  height: fit-content;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
Container.Questions = styled.div`
  width: inherit;
  span {
    color: black;
  }
  background-color: var(--modalBack);
  padding: 10px;
  img {
    max-width: 500px;
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
`;
Container.Answers = styled.div`
  input[type="radio"]:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    content: "";
  }

  input[type="radio"]:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--hoverText);
    content: "";
    display: inline-block;
    border: 3px solid white;
  }
  display: flex;
  flex-direction: column;
  label.checked {
    background-color: var(--hoverText);
    color: white;
    border-radius: 3px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    span {
      color: white;
    }
  }
  label {
    margin: 10px 0px;
    padding: 10px 10px;
    span {
      font-family: var(--fontFemily);
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;

Container.Pagenations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
    padding: 10px 15px;
    box-shadow: var(--shadow);
    background-color: var(--hoverText);
    color: white;
    transition: var(--transition);
    border-radius: 5px;
  }
  div:hover {
    transform: scale(0.95);
  }
`;

Container.Numbers = styled.div`
  min-width: 200px;
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: var(--shadow);
  padding: 10px;
  min-height: fit-content;
  height: fit-content;
  background-color: var(--modalBack);
  @media (max-width: 560px) {
    width: 100%;
  }
  p {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    padding: 10px 18px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: var(--hoverText);
    border-radius: 50%;
    background-color: var(--backMode);
    margin: 5px;
  }
  div {
    margin-top: 20px;
    position: relative;
    bottom: 0px;
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
