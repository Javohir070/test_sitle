import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

function DiscountTimer(props) {
  const navigate = useNavigate();
  const [timing, setTiming] = useState(localStorage.getItem("time"));

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("choused")) {
        localStorage.setItem("time", +localStorage.getItem("time") - 1000);
        setTiming(localStorage.getItem("time"));
      } else {
        navigate("/student/exam-results");
      }
      if (+localStorage.getItem("time") < 0) {
        localStorage.removeItem("time");
        localStorage.removeItem("choused");
        localStorage.removeItem("examId");
      }
    }, 1000);
  }, [timing, navigate]);

  const formatTime = (time) => {
    return new Date(time - 21600000).toLocaleTimeString().slice(3, 8);
  };

  let isDiscountTime = +localStorage.getItem("time") <= props.discountTime;
  return (
    <Container>
      {+localStorage.getItem("time") > 0 ? (
        <div>
          <h2> {formatTime(+localStorage.getItem("time"))}</h2>
          {isDiscountTime && (
            <h4> Торопиться  {props.discountPercent} время уходит!</h4>
          )}
        </div>
      ) : (
        <h2>Время истекло</h2>
      )}
    </Container>
  );
}

export default DiscountTimer;
