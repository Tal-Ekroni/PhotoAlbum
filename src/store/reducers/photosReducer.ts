import { PhotosDispatchTypes, PhotosData } from "../actions/photosActionTypes";
interface INITIAL_STATE_I {
  loading: boolean;
  photos: PhotosData[];
}
const INITIAL_STATE: INITIAL_STATE_I = {
  loading: false,
  photos: [],
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
        }
        return state;
};

export default photosReducer;
