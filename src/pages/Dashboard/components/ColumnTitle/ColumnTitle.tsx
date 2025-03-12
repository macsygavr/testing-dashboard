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
    <div
      className={css.columnContainer}
      onClick={() => {
        if (columnKey) {
          onClick(columnKey);
        }
      }}
    >
      <span className={css.columnTitle}>{columnKey?.toUpperCase()}</span>
      {sortConfig?.key === columnKey && (
        <div
          className={cn(
            css.arrow,
            sortConfig?.direction === Direction.ASC && css.down
          )}
        >
          <SortIcon />
        </div>
      )}
    </div>
  );
};

export default ColumnTitle;
