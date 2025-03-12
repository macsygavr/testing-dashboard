import { Site, Status, Test } from "../../api/api";
import { clearUrlFromPrefix } from "./components/DashboardItem/helpers";

export type PreparedTest = {
  id: string;
  site: string;
} & Omit<Test, "siteId" | "id">;

export enum ColumnKey {
  Name = "name",
  Type = "type",
  Status = "status",
  Site = "site",
}

export enum Direction {
  ASC = "ASC",
  DESC = "DESC",
}

export type SortConfig = {
  key?: ColumnKey;
  direction: Direction;
};

export const columns = [
  ColumnKey.Name,
  ColumnKey.Type,
  ColumnKey.Status,
  ColumnKey.Site,
];

export const customStatusSortOrder = [
  Status.ONLINE,
  Status.PAUSED,
  Status.STOPPED,
  Status.DRAFT,
];

export const serrializeTests = (tests: Test[], sites: Site[]): PreparedTest[] =>
  tests.map((item) => {
    const site = sites.find((el) => el.id === item.siteId)?.url ?? "";

    return {
      id: String(item.id),
      name: item.name,
      type: item.type,
      status: item.status,
      site: clearUrlFromPrefix(site),
    };
  });

export const deserrializeTests = (
  tests: PreparedTest[],
  sites?: Site[]
): Test[] =>
  tests.map((item) => {
    const siteId = sites?.find((el) => el.url.includes(item.site))
      ?.id as number;

    return {
      id: Number(item.id),
      name: item.name,
      type: item.type,
      status: item.status,
      siteId: siteId,
    };
  });
