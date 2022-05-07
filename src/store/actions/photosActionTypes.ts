export const LOAD_PHOTOS = "LOAD_PHOTOS";
export const SET_CURR_PIC = "SET_CURR_PIC";
export const UPDATE_PHOTO = "UPDATE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const ADD_PHOTO = "ADD_PHOTO";

export type PhotosData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type LoadPhotos = {
  type: typeof LOAD_PHOTOS;
  payload: PhotosData[];
};

export type UpdatePhoto = {
  type: typeof UPDATE_PHOTO;
  payload: PhotosData;
};
export type AddPhoto = {
  type: typeof ADD_PHOTO;
  payload: PhotosData;
};
export type DeletePhoto = {
  type: typeof DELETE_PHOTO;
  payload: number;
};
export type SetCurrPic = {
  type: typeof SET_CURR_PIC;
  payload: PhotosData|null;
};

export type PhotosDispatchTypes =
  | LoadPhotos
  | SetCurrPic
  | UpdatePhoto
  | DeletePhoto
  | AddPhoto;
