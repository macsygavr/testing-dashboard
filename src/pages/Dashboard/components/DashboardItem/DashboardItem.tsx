import React, { FC } from "react";
import css from "./index.module.css";
import { getStatusColor, getStatusTitle, getTypeTitle } from "./helpers";
import Button from "../../../../components/Button/Button";
import { PreparedTest } from "../../helpers";
import { Status } from "../../../../api/api";
import { useNavigate } from "react-router";

type Props = {
  test: PreparedTest;
  color: string;
};

const DashboardItem: FC<Props> = ({ test, color }) => {
  const navigate = useNavigate();

  const handleGoToFinalizeClick = () => {
    navigate(`/finalize/${test.id}`);
  };

  const handleGoToResultsClick = () => {
    navigate(`/results/${test.id}`);
  };

  return (
    <div className={css.container} style={{ borderLeft: `4px solid ${color}` }}>
      <div className={css.gridContainer}>
        <span className={css.name}>{test.name}</span>
        <span>{getTypeTitle(test.type)}</span>
        <span
          className={css.status}
          style={{ color: `${getStatusColor(test.status)}` }}
        >
          {getStatusTitle(test.status)}
        </span>
        <div className={css.lastContainer}>
          <span>{test.site}</span>
          {test.status === Status.DRAFT ? (
            <Button variant="grey" onClick={handleGoToFinalizeClick}>
              Finalize
            </Button>
          ) : (
            <Button variant="green" onClick={handleGoToResultsClick}>
              Results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
