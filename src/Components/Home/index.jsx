import React from "react";
// import InfoEduItems from "../InfoEduItems";
import Slider from "../Slider";
import OurPlans from "../OurInfo";
import Contact from "../ContactUs";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Slider />
      <OurPlans />

      {/* <InfoEduItems /> */}

      <Contact />
    </div>
  );
};

export default Home;
