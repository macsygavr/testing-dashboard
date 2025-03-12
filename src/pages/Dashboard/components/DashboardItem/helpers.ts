import { Status, Type } from "../../../../api/api";

export const getRandomColor = () => {
  const colors = ["#E14165", "#C2C2FF", "#8686FF"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.DRAFT:
      return "#5C5C5C";

    case Status.ONLINE:
      return "#1BDA9D";

    case Status.PAUSED:
      return "#FF8346";

    case Status.STOPPED:
      return "#FE4848";

    default:
      return null;
  }
};

export const getStatusTitle = (status: Status) => {
  switch (status) {
    case Status.DRAFT:
      return "Draft";

    case Status.ONLINE:
      return "Online";

    case Status.PAUSED:
      return "Paused";

    case Status.STOPPED:
      return "Stopped";

    default:
      return null;
  }
};

export const getTypeTitle = (type: Type) => {
  switch (type) {
    case Type.CLASSIC:
      return "Classic";

    case Type.MVT:
      return "MVT";

    case Type.SERVER_SIDE:
      return "Server-side";

    default:
      return null;
  }
};

export const clearUrlFromPrefix = (url: string) => {
  return url.replace(/^https?:\/\/(www\.)?|^www\./, '')
}
