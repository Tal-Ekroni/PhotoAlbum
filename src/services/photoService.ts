import axios from "axios";
import { PhotosData } from "../store/actions/photosActionTypes";

export const photoService = {
  query,
  updateTitle
};

async function query() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return res;
}

async function updateTitle(photo:PhotosData,txt: string) {
  const newPhoto= {...photo,title:txt}
  const res = await axios.put(`https://jsonplaceholder.typicode.com/photos/${photo.id}`, newPhoto)
  return res.data
}
