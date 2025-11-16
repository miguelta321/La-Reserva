import axios from "axios";

export default (url = "https://la-reserva.onrender.com/api/v1") => {
  return axios.create({
    baseURL: url,
  });
};
