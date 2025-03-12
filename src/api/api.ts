import axios, { AxiosResponse } from "axios";

const baseApiPath = "http://localhost:3100";

export enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export const getAllTests = (): Promise<Test[]> => {
  return axios.get(`${baseApiPath}/tests`).then(data => data.data);
};

export const getAllSites = (): Promise<Site[]> => {
  return axios.get(`${baseApiPath}/sites`).then(data => data.data);
};

export const getTestsById = (id: number): Promise<Test> => {
  return axios.get(`${baseApiPath}/tests/${id}`).then(data => data.data);
};
