import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DiscountTimer from "../../Components/DisCountTime";
import Loading from "../../Components/Loading";
import { mainUrl } from "../../MainUrl";
import { Container } from "./styled";

const StudentExam = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showQuestion, setShowQuestion] = useState(0);
  const [render, setRender] = useState(true);
  const [examTest, setExamTest] = useState({
    title: "",
    desc: "",
    exam_type: "",
    questions: [{ text: "", variants: [], id: "", image: "" }],
    semester: "",
  });
  const params = useParams();
  useEffect(() => {
    fetch(mainUrl + "exams/items/" + params.id.split("-")[0] + "/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setExamTest({
          title: res.title,
          desc: res.for_group_desc,
          exam_type: res.exam_type,
          questions: res.questions,
          semester: res.semester,
        });
        setIsLoading(false);
      });
  }, [params.id]);

  const navigate = useNavigate();
  const onChouseAnswer = (index) => {
    setShowQuestion(index);
  };
  const onEndExam = () => {
    if (window.confirm("Вы уверены, что хотите закончить тест?")) {
      axios
        .post(
          mainUrl + "exams/results/save/" + params.id.split("-")[0] + "/",
          {
            answers: examTest.questions.map((e, i) => {
              const onequestion = JSON.parse(
                localStorage.getItem(`answer_${i}`)
              );
              return { ...onequestion };
            }),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access"),
            },
          }
        )
        .then((res) => {
          localStorage.setItem("resultExam", res.data.ball);
          navigate("/student/exam-results");
          window.location.reload();
        });
      localStorage.removeItem("choused");
      localStorage.removeItem("examId");
      localStorage.removeItem("time");

      examTest.questions.map((e, i) => {
        return localStorage.removeItem("answer_" + i);
      });
    }
  };
  const handleChange = (id) => {
    const question_id = examTest.questions[showQuestion].id;
    const variant_id = id;

    if (localStorage.getItem(`answer_${showQuestion}`)) {
      if (window.confirm("Вы уверены, что хотите изменить ответ теста?")) {
        localStorage.setItem(
          `answer_${showQuestion}`,
          JSON.stringify({ question_id: question_id, variant_id: variant_id })
        );
        setRender(!render);
      }
    } else {
      localStorage.setItem(
        `answer_${showQuestion}`,
        JSON.stringify({ question_id: question_id, variant_id: variant_id })
      );
      setRender(!render);
    }
  };

  const onPagenation = (payload) => {
    if (payload === 1 && showQuestion !== examTest.questions.length - 1) {
      setShowQuestion(showQuestion + 1);
    } else if (payload === -1 && showQuestion !== 0) {
      setShowQuestion(showQuestion - 1);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="wrap-Container">
      <Container>
        <Container.Title>Название экзамена: {examTest.title}</Container.Title>
        <Container.Time>
          <Container.Type>
            Turi:{" "}
            {examTest.exam_type === "intermediate"
              ? "Промежуточный контроль"
              : examTest.exam_type === "current"
              ? "Текущиe контроль"
              : "Окончательный контроль"}
          </Container.Type>
        </Container.Time>
        <DiscountTimer duration={610000} discountTime={600000} />

        <Container.Wrap>
          <Container.Questions>
            <Container.Title>
              {showQuestion + 1 + "-savol. "}
              <span>{examTest.questions[showQuestion].text}</span>
            </Container.Title>
            {examTest.questions[showQuestion].image ? (
              <img
                src={examTest.questions[showQuestion].image}
                alt={examTest.questions[showQuestion].text}
              />
            ) : (
              ""
            )}
            <Container.Answers>
              {examTest.questions[showQuestion].variants.map((e) => {
                return (
                  <label
                    key={e.id}
                    className={
                      JSON.parse(localStorage.getItem(`answer_${showQuestion}`))
                        ?.variant_id === e.id
                        ? "checked"
                        : ""
                    }
                  >
                    <input
                      value={e.text}
                      type="radio"
                      onChange={() => handleChange(e.id)}
                      checked={
                        JSON.parse(
                          localStorage.getItem(`answer_${showQuestion}`)
                        )?.variant_id === e.id
                      }
                      name={examTest.questions[showQuestion].text}
                    />
                    <span>{e.text}</span>
                  </label>
                );
              })}
            </Container.Answers>
            <Container.Pagenations>
              <div onClick={() => onPagenation(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Предыдущий
              </div>
              <div onClick={() => onPagenation(1)}>
              Следующий<FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Container.Pagenations>
            <Container.Desc>{examTest.desc}</Container.Desc>
          </Container.Questions>
          <Container.Numbers>
            {examTest.questions.map((e, i) => {
              return (
                <p
                  style={{
                    backgroundColor:
                      showQuestion === i ||
                      JSON.parse(localStorage.getItem(`answer_${i}`))
                        ?.question_id === e.id
                        ? "var(--hoverText)"
                        : "var(--backMode)",
                    color:
                      showQuestion === i ||
                      JSON.parse(localStorage.getItem(`answer_${i}`))
                        ?.question_id === e.id
                        ? "var(--modalBack)"
                        : "var(--hoverText)",
                  }}
                  onClick={() => onChouseAnswer(i)}
                  key={e.id}
                >
                  {i + 1}
                </p>
              );
            })}
            <div onClick={onEndExam}>Завершить экзамен</div>
          </Container.Numbers>
        </Container.Wrap>
      </Container>
    </div>
  );
};

export default StudentExam;
