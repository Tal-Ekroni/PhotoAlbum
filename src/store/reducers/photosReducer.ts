import { PhotosDispatchTypes, PhotosData } from "../actions/photosActionTypes";
interface INITIAL_STATE_I {
  loading: boolean;
  photos: PhotosData[];
  isModalOpen: boolean;
  currPic?: PhotosData;
}
const INITIAL_STATE: INITIAL_STATE_I = {
  loading: false,
  photos: [],
  isModalOpen: false,
};
const photosReducer = (
  state: INITIAL_STATE_I = INITIAL_STATE,
  action: PhotosDispatchTypes
): INITIAL_STATE_I => {
  var newState = state;
  let newPhotos;
  switch (action.type) {
    case "LOAD_PHOTOS":
      newState = {
        ...state,
        photos: [...action.payload],
      };
      break;
    case "TOGGLE_MODAL":
      newState = {
        ...state,
        isModalOpen: action.payload,
      };
      break;
    case "SET_CURR_PIC":
      newState = {
        ...state,
        currPic: action.payload,
      };
      break;
    case "UPDATE_PHOTO":
      newPhotos = state.photos.map((photo) =>
        photo.id === action.payload.id ? action.payload : photo
      );
      newState = {
        ...state,
        photos: newPhotos,
      };
      break;
    case "DELETE_PHOTO":
      newPhotos = state.photos.filter((photo) => photo.id !== action.payload);
      newState = { ...state, photos: newPhotos };
      break;
    case "ADD_PHOTO":
      newState = { ...state, photos: [...state.photos, action.payload] };
      console.log(newState);
      
      break;
  }
  return newState;
};

export default photosReducer;
