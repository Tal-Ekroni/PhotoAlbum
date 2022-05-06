import axios from "axios";
import { PhotosData } from "../store/actions/photosActionTypes";

export const photoService = {
  query,
  updateTitle,
  deletePhoto,
  addPhoto,
  getRandomId,
};

async function query() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return res;
}

async function updateTitle(photo: PhotosData, txt: string) {
  const newPhoto = { ...photo, title: txt };
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/photos/${photo.id}`,
      newPhoto
    );
    return res.data;
  } catch (e) {
    return newPhoto;
  }
}
async function deletePhoto(id: number) {
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return res.data;
}
async function addPhoto(newPhoto: PhotosData) {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/photos/",
    newPhoto
  );
  return res.data;
}

function getRandomId(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
