import React from "react";
import css from "./index.module.css";
import BackArrow from "../../assets/BackArrow";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  return (
    <button onClick={handleBackClick} className={css.backBtn}>
      <BackArrow />
      <span className={css.text}>Back</span>
    </button>
  );
};

export default BackButton;
