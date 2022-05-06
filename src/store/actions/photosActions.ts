import { Dispatch } from "redux";
import {
  PhotosDispatchTypes,
  LOAD_PHOTOS,
  SET_CURR_PIC,
  TOGGLE_MODAL,
  PhotosData,
  UPDATE_PHOTO,
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
  (data: PhotosData) => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
      dispatch({
        type: SET_CURR_PIC,
        payload: data,
      });
    } catch (err) {}
  };

export const toggleModal = (toggle: boolean) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TOGGLE_MODAL,
      payload: toggle,
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
