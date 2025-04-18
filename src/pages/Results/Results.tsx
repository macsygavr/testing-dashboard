import React, { FC, useEffect, useState } from "react";
import css from "./index.module.css";
import Header from "../../components/Header/Header";
import { getTestsById, Test } from "../../api/api";
import { useParams } from "react-router";
import BackButton from "../../components/BackButton/BackButton";

const Results = () => {
  const { testId } = useParams();
  const [testData, setTestData] = useState<Test>();

  useEffect(() => {
    if (testId) {
      getTestsById(Number(testId)).then(setTestData);
    }
  }, [testId]);

  return (
    <div className={css.container}>
      <div>
        <Header title={"Results"} />
        <div className={css.info}>{testData?.name}</div>
      </div>
      <BackButton />
    </div>
  );
};

export default Results;
