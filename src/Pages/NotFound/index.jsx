import React from "react";
import { Container } from "./styled";
import notFound from "../../Assets/Img/404.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>
      Эта страница не найдена, пожалуйста,{" "}
        <span onClick={() => navigate("/")}>Главный </span> перейти на страницу
      </p>
      <img src={notFound} alt="404_error" />
    </Container>
  );
};

export default NotFound;
