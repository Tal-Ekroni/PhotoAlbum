export const LOAD_PHOTOS = "LOAD_PHOTOS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_CURR_PIC = "SET_CURR_PIC";
export const UPDATE_PHOTO = "UPDATE_PHOTO";


export type PhotosData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type LoadPhotos= {
  type: typeof LOAD_PHOTOS;
  payload:PhotosData[]
  

}
export type ToggleModal ={
  type: typeof TOGGLE_MODAL;
  payload:boolean
}
export type UpdatePhoto ={
  type: typeof UPDATE_PHOTO;
  payload:PhotosData
}
export type SetCurrPic= {
  type: typeof SET_CURR_PIC;
  payload:PhotosData
}

export type PhotosDispatchTypes = LoadPhotos | ToggleModal|SetCurrPic |UpdatePhoto;
