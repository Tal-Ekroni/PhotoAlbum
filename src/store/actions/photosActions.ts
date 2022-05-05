import { Dispatch } from "redux";
import {
  PhotosDispatchTypes,
  LOAD_PHOTOS,
  SET_CURR_PIC,
  TOGGLE_MODAL,
  PhotosData
  
} from "./photosActionTypes";
import { photoService } from "../../services/photoService";

export const getPhotos =
  () => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
      const res = await photoService.query()
      dispatch({
        type: LOAD_PHOTOS,
        payload:res.data.splice(0,100)
      });
    } catch (err) {
   
    }
  };
  export const setCurrPic =
  (data:PhotosData) => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
      console.log('testy');
      
      dispatch({
        type: SET_CURR_PIC,
        payload:data
      });
    } catch (err) {
   
    }
  };
  export const toggleModal =(toggle:boolean) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TOGGLE_MODAL,
        payload:toggle
      });
    } catch (err) {
   
    }
  };
// import { photoService } from "../../services/photoService";

// export function loadPhotos() {
//   return async (dispatch, getState) => {
//     const { filterBy } = getState().photoModule;
//     try {
//       const photos = await photoService.query();
//       dispatch({ type: "SET_PHOTO", photos });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export function removePhoto(photoId) {
//     return async (dispatch) => {
//         try {
//             await photoService.remove(photoId)
//             dispatch({ type: 'REMOVE_PHOTO', photoId })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// export function setFilterBy(filterBy) {
//     return async (dispatch) => {
//         dispatch({ type: 'SET_FILTER_BY', filterBy })
//     }
// }

// export function getPhotoById(photoId) {
//     return async () => {
//         return await photoService.getById(photoId)
//     }
// }
