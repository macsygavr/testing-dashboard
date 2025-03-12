import React, { FC, useEffect, useState } from "react";
import css from "./index.module.css";
import Header from "../../components/Header/Header";
import { getTestsById, Test } from "../../api/api";
import { useParams } from "react-router";
import BackButton from "../../components/BackButton/BackButton";

const Finalize = () => {
  const { testId } = useParams();
  const [testData, setTestData] = useState<Test>();

  console.log(testId);

  useEffect(() => {
    if (testId) {
      getTestsById(Number(testId)).then(setTestData);
    }
  }, [testId]);

  return (
    <div className={css.container}>
      <div>
        <Header title={"Finalize"} />
        <div className={css.info}>{testData?.name}</div>
      </div>
      <BackButton />
    </div>
  );
};

export default Finalize;
