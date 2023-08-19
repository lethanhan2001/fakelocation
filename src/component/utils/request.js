import axios from "axios";

const request = axios.create({
  baseURL: "http://14.225.7.221:3005/",
});

export const get = async (path, optiton = {}) => {
  const res = await request.get(path, optiton);
  return res.data;
};

export default request;
