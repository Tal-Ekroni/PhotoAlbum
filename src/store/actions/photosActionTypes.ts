export const LOAD_PHOTOS = "LOAD_PHOTOS";
export const LOAD_FAIL = "LOAD_FAIL";
export const LOAD_SUCCESS = "LOAD_SUCCESS";

export type PhotosData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export interface LoadPhotos {
  type: typeof LOAD_PHOTOS;
}
export interface LoadFail {
  type: typeof LOAD_FAIL;
}
export interface LoadSuccess {
  type: typeof LOAD_SUCCESS;
  payload:PhotosData[]
  

}

export type PhotosDispatchTypes = LoadPhotos | LoadFail | LoadSuccess;
