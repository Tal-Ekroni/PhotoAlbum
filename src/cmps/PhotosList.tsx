import React from "react";
import { PhotosData } from "../store/actions/photosActionTypes";
import PhotoPreview from "./PhotoPreview";

type Props = {
  handleScroll:Function;
  photos: PhotosData[];
};

const PhotosList: React.FC<Props> = ({ handleScroll,photos }) => {
  return (
    <div onScroll={(ev)=>handleScroll(ev)} className="MainLayout PhotoList d-flex flex-wrap flex-row justify-content-between">
      {photos.map(photo => {
        return <PhotoPreview key={photo.url} photo={photo} />;
      })}
    </div>
  );
};
export default PhotosList;
