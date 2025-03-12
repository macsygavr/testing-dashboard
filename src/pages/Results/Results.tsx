import React, { FC } from "react";
import css from "./index.module.css";
import Header from "../../components/Header/Header";

const Results = () => {
  return (
    <div className={css.container}>
      <Header title={"Results"} />
    </div>
  );
};

export default Results;
