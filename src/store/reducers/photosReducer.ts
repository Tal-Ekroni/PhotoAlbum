import { PhotosDispatchTypes, PhotosData } from "../actions/photosActionTypes";
interface INITIAL_STATE_I {
  loading: boolean;
  photos: PhotosData[];
  isModalOpen: boolean;
  currPic?:PhotosData|{}
}
const INITIAL_STATE: INITIAL_STATE_I = {
  loading: false,
  photos: [],
  isModalOpen: false,
  currPic:{}
};
const photosReducer = (
  state: INITIAL_STATE_I = INITIAL_STATE,
  action: PhotosDispatchTypes
): INITIAL_STATE_I => {
  switch (action.type) {
    case "LOAD_PHOTOS":
      return {
        ...state,
        photos: [...action.payload],
      };
      case "TOGGLE_MODAL":
        return {
          ...state,
          isModalOpen: action.payload,
        };
        case "SET_CURR_PIC":
          console.log(action);
          
          return {
            ...state,
            currPic: action.payload,
          };
  }
  return state;
};

export default photosReducer;
