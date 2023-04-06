import React from "react";

function PlanCard({ planData }) {
  return (
    <>
      <div className="plan-card">
        <img
          src={planData?.img}
          alt={"p[lan info"}
          title={planData?.imgTitle}
        />
        {/* <div className="card-icons">
          <span>{planData?.icons}</span>
        </div> */}
        {/* <div className="card-text">
          <h4>{planData?.cardText}</h4>
          <p>{planData?.cardTitle}</p>
        </div> */}
      </div>
    </>
  );
}

export default PlanCard;
