import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const GoLogin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>вы не авторизованы</h1>
      <span>
      Ошибка <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
      </span>
      <h1>Пожалуйста, перейдите в окно входа</h1>
      <div onClick={() => navigate("/sign-in")}>Входить</div>
    </Container>
  );
};

export default GoLogin;
