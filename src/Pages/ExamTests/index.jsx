import { faArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExamItem from "../../Components/ExamItem";
import Loading from "../../Components/Loading";
import { mainUrl } from "../../MainUrl";
// import { examList } from "../../Mock/exam-list";
import { Container } from "./styled";

const ExamTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [examList, setExamList] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(mainUrl + "exams/items/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setExamList(res);
        setIsLoading(false);
      });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <Container className="container">
      <Container.Back onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faArrowLeft} />
        {"  "}
        Назад
      </Container.Back>
      <Container.Title>
      Для вас предоставлены {" "}
        {params.id === "intermediate"
          ? "Средний"
          : params.id === "current"
          ? "текущий"
          : "Финал"}{" "}
        контрольные тесты
      </Container.Title>
      <Container.Wrap>
        {examList.length &&
        examList.filter((e) => e.exam_type === params.id).length ? (
          examList
            .filter((e) => e.exam_type === params.id)
            .map((e, i) => {
              return <ExamItem data={e} key={i} />;
            })
        ) : (
          <Container.Info>
            <div className="icon">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className="content">
            Для вас нет пробных экзаменов!!!
            </div>
          </Container.Info>
        )}
      </Container.Wrap>
    </Container>
  );
};

export default ExamTest;
