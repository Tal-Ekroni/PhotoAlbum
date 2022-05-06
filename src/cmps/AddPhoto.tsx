import React, { Dispatch, FormEvent, useId, useState } from "react";
import { useDispatch } from "react-redux";
import { photoService } from "../services/photoService";
import { addPhoto } from "../store/actions/photosActions";

const AddPhoto: React.FC = () => {
  const [isAddOn, setIsAddOn] = useState(false);
  const dispatch:any = useDispatch();
  const uploadPhoto = (ev: React.SyntheticEvent): void => {
    ev.preventDefault();
    let target = ev.target as typeof ev.target & {
      title: { value: string };
      imgUrl: { value: string };
      tmbUrl: { value: string };
    };

    const title = target.title.value;
    const url = target.imgUrl.value;
    const thumbnailUrl = target.tmbUrl.value;
    const newPhoto={
        albumId:photoService.getRandomId(300,999),
        id:photoService.getRandomId(999,3999),
        title,
        url,
        thumbnailUrl
    }
    dispatch(addPhoto(newPhoto))
    
  };
  return (
    <div className="m-3 ">
      <button
        onClick={() => {
          setIsAddOn(!isAddOn);
        }}
      >
        Add Your Own
      </button>

      {isAddOn && (
        <div className="d-flex flex-column">
          <form onSubmit={(ev) => uploadPhoto(ev)}>
            <label htmlFor="title">Image Title</label>
            <input type="text" id="title" />

            <label htmlFor="imgUrl">Image Url</label>
            <input type="text" id="imgUrl" />
            <label htmlFor="tmbUrl">Thumbnail Url</label>
            <input type="text" id="tmbUrl" />
            <button>Upload</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddPhoto;
