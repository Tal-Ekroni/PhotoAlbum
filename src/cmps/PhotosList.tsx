import React from "react";
import { PhotosData } from "../store/actions/photosActionTypes";
import PhotoPreview from "./PhotoPreview";

type Props = {
  photos: PhotosData[];
};

const PhotosList: React.FC<Props> = ({ photos }) => {
  return (
    <div className="MainLayout PhotoList d-flex flex-wrap flex-row justify-content-between">
      {photos.map(photo => {
        return <PhotoPreview key={photo.url} photo={photo} />;
      })}
    </div>
  );
};
export default PhotosList;
