import axios from "axios";

export const photoService = {
  query,
};

async function query() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return res;
}
