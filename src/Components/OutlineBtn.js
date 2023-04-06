import React from "react";
import { useNavigate } from "react-router-dom";

function OutlineBtn({ text }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/more-info")} className="outline-btn">
      {text}
    </button>
  );
}

export default OutlineBtn;
