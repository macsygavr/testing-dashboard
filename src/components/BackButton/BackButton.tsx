import React from "react";
import css from "./index.module.css";
import BackArrow from "../../assets/BackArrow";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  return (
    <div onClick={handleBackClick} className={css.backBtn}>
      <BackArrow />
      <span className={css.text}>Back</span>
    </div>
  );
};

export default BackButton;
