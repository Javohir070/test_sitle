import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoComponent from "../../Components/VideoComponent";
import { Container } from "./styled";
import {
  faCircleQuestion,
  faPenToSquare,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { mainUrl } from "../../MainUrl";
import Loading from "../../Components/Loading";

const PracticeSHow = () => {
  const params = useParams();
  const lectureId = params.id.split("-")[0];

  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(mainUrl + "lecture/" + lectureId + "/").then((res) => {
      setLecture(res.data);
      setLoading(false);
    });
  }, [lectureId]);

  const onResource = (url) => {
    window.open(url, "_blank");
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Container.Title>Лекция: {lecture.title}</Container.Title>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: lecture?.text }} />
      </div>
      {lecture.youtube ? (
        <Container.Video>
          <p>
            <FontAwesomeIcon icon={faPersonChalkboard} /> Практическое видео:{" "}
          </p>
          <VideoComponent
            width={640}
            height={390}
            id={lecture.youtube.split("v=")[1]}
          />
        </Container.Video>
      ) : (
        ""
      )}

      {lecture.resources.length ? (
        <div className="container">
          <Container.Title>Ресурсы для самостоятельного изучения</Container.Title>
          <Container.Resources>
            {lecture.resources.map((e, i) => {
              return i < 5 ? (
                <div key={i} onClick={() => onResource(e.url)}>
                  <img
                    src={mainUrl.slice(0, mainUrl.length - 5) + e.image}
                    alt={e.title}
                  />
                  <p>{e.title}</p>
                </div>
              ) : (
                ""
              );
            })}
          </Container.Resources>
        </div>
      ) : (
        ""
      )}
      {lecture.questions.length ? (
        <Container.Questions>
          <p>
            <FontAwesomeIcon icon={faCircleQuestion} /> Контрольные вопросы:
          </p>
          <ol>
            {lecture.questions.map((e) => {
              return <li>{e.question}</li>;
            })}
          </ol>
        </Container.Questions>
      ) : (
        ""
      )}

      {lecture.resources.length > 5 ? (
        <div className="container">
          <Container.Title>
          Ресурсы для дальнейшего изучения
          </Container.Title>
          <Container.Resources>
            {lecture.resources.map((e, i) => {
              return i > 4 ? (
                <div key={i} onClick={() => onResource(e.url)}>
                  <img
                    src={mainUrl.slice(0, mainUrl.length - 5) + e.image}
                    alt={e.title}
                  />
                  <p>{e.title}</p>
                </div>
              ) : (
                ""
              );
            })}
          </Container.Resources>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default PracticeSHow;
