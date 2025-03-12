import React, { useMemo, useState } from "react";
import css from "./index.module.css";
import Header from "../../components/Header/Header";
import SearchIcon from "../../assets/SearchIcon";
import DashboardItem from "./components/DashboardItem/DashboardItem";
import { getRandomColor } from "./components/DashboardItem/helpers";
import { Status, Test, Type } from "../../api/api";
import cn from "classnames";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");

  const colors = useMemo(() => tests.map(() => getRandomColor()), [tests]);

  return (
    <div className={css.container}>
      <Header title={"Dashboard"} />
      <div className={css.searchBtnContainer}>
        <button className={css.searchButton}>
          <SearchIcon />
        </button>
      </div>
      <input
        className={css.input}
        placeholder="What test are you looking for?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={css.tableContainer}>
        <div className={css.columnsTitlesContainer}>
          <span>NAME</span>
          <span>TYPE</span>
          <span>STATUS</span>
          <span>SITE</span>
        </div>
        {tests.map((item, index) => (
          <DashboardItem color={colors[index]} test={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

const tests: Test[] = [
  {
    id: 1,
    name: "Order basket redesing",
    type: Type.CLASSIC,
    status: Status.ONLINE,
    siteId: 1,
  },
  {
    id: 2,
    name: "Prototype of the new map",
    type: Type.CLASSIC,
    status: Status.PAUSED,
    siteId: 2,
  },
  {
    id: 3,
    name: "Dark theme test",
    type: Type.MVT,
    status: Status.DRAFT,
    siteId: 3,
  },
  {
    id: 4,
    name: "New Year's Sale",
    type: Type.SERVER_SIDE,
    status: Status.STOPPED,
    siteId: 4,
  },
];
