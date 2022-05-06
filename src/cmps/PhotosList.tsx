import React from "react";
import { PhotosData } from "../store/actions/photosActionTypes";
import PhotoPreview from "./PhotoPreview";

type Props = {
  photos: PhotosData[];
};

const PhotosList: React.FC<Props> = ({ photos }) => {
  return (
    <div className="d-flex flex-wrap flex-row justify-content-between">
      {photos.map((photo, idx) => {
        return <PhotoPreview key={idx} photo={photo} />;
      })}
    </div>
  );
};
export default PhotosList;
