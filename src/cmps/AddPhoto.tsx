import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { photoService } from "../services/photoService";
import { addPhoto } from "../store/actions/photosActions";

const AddPhoto: React.FC = () => {
  const dispatch: any = useDispatch();

  const [isAddOn, setIsAddOn] = useState(false);

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
    const newPhoto = {
      albumId: photoService.getRandomId(300, 999),
      id: photoService.getRandomId(999, 3999),
      title,
      url,
      thumbnailUrl,
    };
    dispatch(addPhoto(newPhoto));
    setIsAddOn(!isAddOn);
  };
  return (
    <div className="AddPhoto m-3 d-flex justify-content-center ">
      {!isAddOn && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsAddOn(!isAddOn);
          }}
        >
          Add New Photo
        </button>
      )}
      {isAddOn && (
        <div className="AddPhoto d-flex ">
          <form className="d-flex flex-column" onSubmit={(ev) => uploadPhoto(ev)}>
           <div className="d-flex flex-row justify-content-center">
           <div className="labels d-flex flex-column">
            <label className="mb-2" htmlFor="title">Image Title</label>
            <label className="mb-2" htmlFor="imgUrl">Image Url</label>
            <label className="me-2" htmlFor="tmbUrl">Thumbnail Url</label>
              
            </div>
            <div className="inputs d-flex flex-column">
            <input type="text" id="title" />
            <input type="text" id="imgUrl" />
            <input type="text" id="tmbUrl" />
            </div>
           </div>
            <button className="btn btn-light">Upload</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddPhoto;
