import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const fetchCourses = async () => {
  const res = await axios.get(`${API_URL}/courses?populate=category`);
  return res.data.data;
};
