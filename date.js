import initWebRoute from "./src/routes/webRoute";

const myDateTime = (str = "Ngay hien tai:") => {
  return str + Date();
};
export default myDateTime;
