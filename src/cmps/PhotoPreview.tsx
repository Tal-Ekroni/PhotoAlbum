import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePhoto,
  setCurrPic,
  updateTitle,
} from "../store/actions/photosActions";
import { PhotosData } from "../store/actions/photosActionTypes";
import { RootStore } from "../store/store";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  photo: PhotosData;
};

const PhotoPreview: React.FC<Props> = ({ photo }) => {
  const dispatch: any = useDispatch();
  const { currPic } = useSelector((state: RootStore) => state.photosModule);

  const [isEdit, setIsEdit] = useState(false);
  const [titleTxt, setTitleTxt] = useState(photo.title);

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setTitleTxt(value);
  };

  const openFullSize = () => {
    if (currPic) return;
    dispatch(setCurrPic(photo));
  };
  const onChangeTitle = async () => {
    if (!titleTxt) return;
    dispatch(updateTitle(photo, titleTxt));
    setIsEdit(false);
  };
  const onDeletePhoto = async (ev: React.MouseEvent, id: number) => {
    ev.stopPropagation();
    dispatch(deletePhoto(id));
  };
  return (
    <div className="CardContainer  mb-4 ">
      <div className=" ThumbnailImg d-flex align-self-end">
        <img src={photo.thumbnailUrl} onClick={openFullSize} />
      </div>
      {!isEdit && <h4 className="PhotoTitle ">{photo.title}</h4>}
      {isEdit && (
        <input
          className="TitleEdit"
          type="text"
          value={titleTxt}
          onInput={handleInput}
        />
      )}
      <button className="btn btn-primary ViewBtn" onClick={openFullSize}>
        View Full Size
      </button>
      <div className="EditBtns">
        {isEdit && <IoMdCheckmark size={25} onClick={onChangeTitle} />}
        <FiEdit2
          size={20}
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        />
        <MdDelete size={25} onClick={(ev) => onDeletePhoto(ev, photo.id)} />
      </div>
    </div>
  );
};
export default PhotoPreview;
