import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import { mainUrl } from "../../MainUrl";
import { Container } from "./styled";

const Lectures = () => {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(mainUrl + "lecture/all/?type=lecture").then((res) => {
      setLectures(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="container">
      <Container>
        <Container.Right>
          <Container.Title>
          ТЕОРЕТИЧЕСКИЕ ОСНОВЫ ИНФОРМАТИКИ ЛЕКЦИОННЫЙ КУРС
             ПРЕДМЕТЫ
          </Container.Title>
          {lectures.map((e, i) => {
            return (
              <p
                key={i}
                onClick={() => navigate("/lectures/" + e.id + "-" + e.title)}
              >
                {e.title}
              </p>
            );
          })}
        </Container.Right>
      </Container>
    </div>
  );
};

export default Lectures;
