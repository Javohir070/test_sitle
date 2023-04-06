import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import GoLogin from "../Components/GoLogin";
import MainLayout from "../Layouts/MainLayout";
import ExamResult from "../Pages/ExamResult";
import ExamTest from "../Pages/ExamTests";
import Lectures from "../Pages/Lectures";
import LectureShow from "../Pages/LextureShow";
import MainPage from "../Pages/MainPage";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import StudentExam from "../Pages/StudentExam";
import MoreInfo from "../Pages/MoreInfo";
import Practices from "../Pages/Practices";
import PracticeSHow from "../Pages/PracticeShow";
const Router = () => {
  return (
    <Routes>
      <Route element={<SignIn />} path={"/sign-in"} />
      <Route element={<Register />} path={"/register"} />
      <Route element={<MainLayout />} path={"/"}>
        <Route element={<MainPage />} path={"/"} />
        <Route element={<Lectures />} path={"/lectures"} />
        <Route element={<LectureShow />} path={"/lectures/:id"} />
        <Route element={<Practices />} path={"/practices"} />
        <Route element={<PracticeSHow />} path={"/practices/:id"} />
        <Route element={<MoreInfo />} path={"/more-info"} />
        <Route element={<NotFound />} path={"*"} />
      </Route>

      <Route path={"/student"}>
        <Route element={<ExamResult />} path={"/student/exam-results"} />
        <Route element={<StudentExam />} path={"/student/exam/:id"} />
        <Route
          element={
            Boolean(localStorage.getItem("loged")) ? <ExamTest /> : <GoLogin />
          }
          path={"/student/exams-list/:id"}
        />
        <Route
          element={<Navigate to={"/student/exams-list"} />}
          path={"/student"}
        />
      </Route>
    </Routes>
  );
};

export default Router;
