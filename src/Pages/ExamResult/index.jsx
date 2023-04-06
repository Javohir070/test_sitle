import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const ExamResult = () => {
  const navigate = useNavigate();
useEffect(()=>{
if(localStorage.getItem("resultExam") * 100 <= 60){
  navigate("/lectures")
}
},[])
  return (
    <Container>
      <h1>Ваш результат экзамена</h1>
      <span>{localStorage.getItem("resultExam") * 100}балл </span>
      <div
        onClick={() => {
          navigate("/");
          localStorage.removeItem("resultExam");
        }}
      >
        Вернуться в главное окно
      </div>
    </Container>
  );
};

export default ExamResult;
