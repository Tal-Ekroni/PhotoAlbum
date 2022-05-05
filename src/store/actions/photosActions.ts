import { Dispatch } from "redux";
import axios from "axios";
import {
  PhotosDispatchTypes,
  LOAD_PHOTOS,
  
} from "./photosActionTypes";

export const getPhotos =
  () => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    try {
   
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      dispatch({
        type: LOAD_PHOTOS,
        payload:res.data
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
