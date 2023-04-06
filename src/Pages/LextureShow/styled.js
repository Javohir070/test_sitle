import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-family: var(--fontFemily);
  padding: 15px 25px;
  div {
    text-align: justify;
    line-height: 24px;
    font-size: 18px;
    font-weight: 500;
    span {
      color: var(--hoverText);
      margin-left: 20px;
    }
    div {
      ol {
        padding-left: 25px;
        li {
          ::marker {
            color: var(--text);
          }
          text-transform: capitalize;
        }
      }
    }
  }
`;

Container.Video = styled.div`
  margin-top: 20px;
  p {
    color: var(--hoverText);
    font-size: 22px;
    font-weight: 700;
  }
`;
Container.Title = styled.h1`
  font-family: var(--fontFemily);
  font-style: normal;
  margin-left: 10px;
  color: var(--hoverText);
  font-size: 22px;
  font-weight: 700;
  user-select: none;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
      to right,
      var(--backMode),
      var(--hoverText),
      var(--backMode)
    )
    1;
`;

Container.Questions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 350px;
  max-width: 100%;
  margin-top: 20px;
  p {
    width: 100%;
    color: var(--hoverText);
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
  ol {
    li {
      ::marker {
        color: var(--text);
        font-weight: 600;
      }
      margin-top: 10px;
      font-size: 18px;
    }
  }
`;

Container.Resources = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: fit-content;
  padding: 10px 20px;
  justify-content: center;
  position: relative;
  border-bottom: var(--border);
  margin-bottom: 15px;
  div {
    cursor: pointer;
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      text-align: center;
      color: var(--hoverText);
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      :hover {
        color: var(--backColor);
      }
    }
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }
`;
