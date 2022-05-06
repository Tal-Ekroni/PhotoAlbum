import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePhoto,
  setCurrPic,
  toggleModal,
  updateTitle,
} from "../store/actions/photosActions";
import { PhotosData } from "../store/actions/photosActionTypes";
import { RootStore } from "../store/store";
import ChangeTitle from "./ChangeTitle";

type Props = {
  photo: PhotosData;
};

const PhotoPreview: React.FC<Props> = ({ photo }) => {
  const dispatch: any = useDispatch();
  const { isModalOpen } = useSelector((state: RootStore) => state.photosModule);

  const openFullSize = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isModalOpen) return
    dispatch(setCurrPic(photo));
    dispatch(toggleModal(!isModalOpen));
  };
  const onChangeTitle = async (title: string) => {
    if (!title)return
    dispatch(updateTitle(photo, title));
  };
  const onDeletePhoto = async (ev:React.MouseEvent,id: number) => {
    ev.stopPropagation()
    dispatch(deletePhoto(id));
  };
  return (
    <div className="CardContainer border border-info mb-5 ">
      <h5 className="PhotoTitle ">{photo.title}</h5>
      <ChangeTitle onChangeTitle={onChangeTitle} txt={photo.title} />
        <button className=" btn btn-light" onClick={(ev) => onDeletePhoto(ev,photo.id)}>delete</button>
      <div className=" d-flex flex-row border-0 card justify-content-between ">
        <div
          className=" ThumbnailImg d-flex align-self-end"
          onClick={(ev) => openFullSize(ev)}
        >
          <img src={photo.thumbnailUrl} />
        </div>
      </div>
    </div>
  );
};
export default PhotoPreview;
