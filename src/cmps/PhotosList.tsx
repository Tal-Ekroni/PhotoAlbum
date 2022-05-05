import React from "react";
import { PhotosData } from "../store/actions/photosActionTypes";
import PhotoPreview from "./PhotoPreview";

interface Props {
  photos: PhotosData[];
}

const PhotosList: React.FC<Props> = ({ photos }) => {
  return (
    <div className="d-flex flex-wrap flex-column">
      
      {photos.map((photo, idx) => {
        return <PhotoPreview key={idx} photo={photo} />;
      })}
    </div>
  );
};
export default PhotosList;
