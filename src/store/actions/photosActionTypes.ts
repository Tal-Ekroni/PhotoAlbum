export const LOAD_PHOTOS = "LOAD_PHOTOS";


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

export type PhotosDispatchTypes = LoadPhotos  ;
