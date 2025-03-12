import React, { FC } from "react";
import css from "./index.module.css";
import { Test } from "../../../../api/api";
import { getStatusColor, getStatusTitle, getTypeTitle } from "./helpers";
import cn from "classnames";

type Props = {
  test: Test;
  color: string;
};

const DashboardItem: FC<Props> = ({ test, color }) => {
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
          <span>{test.siteId}</span>
          <button className={cn(css.btn, css.grey)}>Result</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
