import React, { FC } from "react";
import { ColumnKey, Direction, SortConfig } from "../../helpers";
import css from "./index.module.css";
import SortIcon from "../../../../assets/SortIcon";
import cn from "classnames";

type Props = {
  columnKey?: ColumnKey;
  sortConfig?: SortConfig;
  onClick: (key: ColumnKey) => void;
};

const ColumnTitle: FC<Props> = ({ columnKey, sortConfig, onClick }) => {
  return (
    <th className={css.columnContainer}>
      <div
        className={css.columnTitleBlock}
      >
        <span className={css.columnTitle} onClick={() => {
          if (columnKey) {
            onClick(columnKey);
          }
        }}>{columnKey?.toUpperCase()}</span>
        <div
          className={cn(
            css.arrow,
            sortConfig?.key !== columnKey && css.hidden,
            sortConfig?.direction === Direction.ASC && css.down
          )}
        >
          <SortIcon />
        </div>
      </div>
    </th>
  );
};

export default ColumnTitle;
