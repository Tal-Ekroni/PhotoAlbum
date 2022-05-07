import { Dispatch } from "redux";
import {
  PhotosDispatchTypes,
  LOAD_PHOTOS,
  SET_CURR_PIC,
  PhotosData,
  UPDATE_PHOTO,
  DELETE_PHOTO,
  ADD_PHOTO,
} from "./photosActionTypes";
import { photoService } from "../../services/photoService";

export const getPhotos =
  () => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
      const res = await photoService.query();
      dispatch({
        type: LOAD_PHOTOS,
        payload: res.data.splice(0, 100),
      });
    } catch (err) {}
  };

export const setCurrPic =
  (data: PhotosData|null) => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
      dispatch({
        type: SET_CURR_PIC,
        payload: data,
      });
    } catch (err) {}
  };


export const updateTitle =
  (photo: PhotosData, title: string) => async (dispatch: Dispatch) => {
    try {
      const editedPhoto = await photoService.updateTitle(photo, title);
      dispatch({
        type: UPDATE_PHOTO,
        payload: editedPhoto,
      });
    } catch (err) {}
  };

export const deletePhoto = (id: number) => async (dispatch: Dispatch) => {
  try {
    await photoService.deletePhoto(id);
    dispatch({
      type: DELETE_PHOTO,
      payload: id,
    });
  } catch (err) {}
};

export const addPhoto =
  (newPhoto: PhotosData) => async (dispatch: Dispatch) => {
    try {
      const res = await photoService.addPhoto(newPhoto);
      dispatch({
        type: ADD_PHOTO,
        payload: res,
      });
    } catch (err) {}
  };
