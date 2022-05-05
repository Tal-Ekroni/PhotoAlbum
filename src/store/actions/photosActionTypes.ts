export const LOAD_PHOTOS = "LOAD_PHOTOS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_CURR_PIC = "SET_CURR_PIC";


export type PhotosData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface LoadPhotos {
  type: typeof LOAD_PHOTOS;
  payload:PhotosData[]
  

}
export interface ToggleModal {
  type: typeof TOGGLE_MODAL;
  payload:boolean
}
export interface SetCurrPic {
  type: typeof SET_CURR_PIC;
  payload:PhotosData
}

export type PhotosDispatchTypes = LoadPhotos | ToggleModal|SetCurrPic ;
