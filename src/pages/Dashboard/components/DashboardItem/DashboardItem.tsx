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
    <tr className={css.container}>
      <td style={{ borderLeft: `4px solid ${color}` }}>{test.name}</td>
      <td>{getTypeTitle(test.type)}</td>
      <td style={{ color: `${getStatusColor(test.status)}` }}>
        {getStatusTitle(test.status)}
      </td>
      <td>
        <span>{test.site}</span>
      </td>
      <td>
        {test.status === Status.DRAFT ? (
          <Button variant="grey" onClick={handleGoToFinalizeClick}>
            Finalize
          </Button>
        ) : (
          <Button variant="green" onClick={handleGoToResultsClick}>
            Results
          </Button>
        )}
      </td>
    </tr>
  );
};

export default DashboardItem;
