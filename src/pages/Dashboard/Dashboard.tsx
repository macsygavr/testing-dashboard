import React, { useEffect, useMemo, useState } from "react";
import css from "./index.module.css";
import Header from "../../components/Header/Header";
import SearchIcon from "../../assets/SearchIcon";
import DashboardItem from "./components/DashboardItem/DashboardItem";
import { getRandomColor } from "./components/DashboardItem/helpers";
import { getAllSites, getAllTests, Site, Test } from "../../api/api";
import Button from "../../components/Button/Button";
import {
  ColumnKey,
  columns,
  customStatusSortOrder,
  deserrializeTests,
  Direction,
  PreparedTest,
  serrializeTests,
  SortConfig,
} from "./helpers";
import ColumnTitle from "./components/ColumnTitle/ColumnTitle";

const Dashboard = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [testsList, setTestsList] = useState<Test[]>();
  const [sitesList, setSitesList] = useState<Site[]>();
  const [testsListForView, setTestsListForView] = useState<Test[]>();
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: undefined,
    direction: Direction.ASC,
  });

  useEffect(() => {
    getAllTests().then((data) => {
      setTestsList(data);
      setTestsListForView(data);
    });
    getAllSites().then(setSitesList);
  }, []);

  useEffect(() => {
    if (searchInputValue) {
      const filteredValues = testsList?.filter((item) =>
        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
      );

      setTestsListForView(filteredValues);
    } else {
      setTestsListForView(testsList);
    }
  }, [searchInputValue]);

  useEffect(() => {
    const filteredData = preparedList.sort(
      (a: PreparedTest, b: PreparedTest) => {
        if (sortConfig.key === ColumnKey.Status) {
          return sortConfig.direction === Direction.ASC
            ? customStatusSortOrder.indexOf(a.status) -
                customStatusSortOrder.indexOf(b.status)
            : customStatusSortOrder.indexOf(b.status) -
                customStatusSortOrder.indexOf(a.status);
        }

        return sortConfig.direction === Direction.ASC
          ? a[sortConfig.key as keyof PreparedTest]?.localeCompare(
              b[sortConfig.key as keyof PreparedTest]
            )
          : b[sortConfig.key as keyof PreparedTest]?.localeCompare(
              a[sortConfig.key as keyof PreparedTest]
            );
      }
    );

    setTestsListForView(deserrializeTests(filteredData, sitesList));
  }, [sortConfig, sitesList]);

  const preparedList: PreparedTest[] = useMemo(() => {
    if (testsListForView && sitesList) {
      return serrializeTests(testsListForView, sitesList);
    }
    return [];
  }, [testsListForView, sitesList]);

  const colors = useMemo(
    () => testsList?.map(() => getRandomColor()) ?? [],
    [testsList]
  );

  const handleResetSearch = () => setSearchInputValue("");

  const handleSort = (key: ColumnKey) => {
    setSortConfig((old) => ({
      key,
      direction:
        old.key === key && old?.direction === Direction.ASC
          ? Direction.DESC
          : Direction.ASC,
    }));
  };

  const showEmptyDataMessage = testsList && !((preparedList ?? []).length > 0);

  return (
    <div className={css.container}>
      <Header title={"Dashboard"} />
      <div className={css.relativeContainer}>
        <button className={css.searchButton}>
          <SearchIcon />
        </button>
        <span className={css.counter}>
          {`${(preparedList ?? []).length} tests`}
        </span>
      </div>
      <input
        className={css.input}
        placeholder="What test are you looking for?"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <div className={css.tableContainer}>
        {showEmptyDataMessage ? (
          <div className={css.emptyData}>
            <span className={css.emptyDataText}>
              Your search did not match any results.
            </span>
            <Button variant="green" onClick={handleResetSearch}>
              Reset
            </Button>
          </div>
        ) : sitesList ? (
          <>
            <div className={css.columnsTitlesContainer}>
              {columns.map((item) => (
                <ColumnTitle
                  key={item}
                  columnKey={item}
                  sortConfig={sortConfig}
                  onClick={handleSort}
                />
              ))}
            </div>
            {preparedList?.map((item, index) => (
              <DashboardItem key={item.id} color={colors[index]} test={item} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
