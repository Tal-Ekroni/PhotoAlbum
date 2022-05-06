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
}

const PhotoPreview: React.FC<Props> = ({ photo }) => {
  const dispatch: any = useDispatch();
  const { isModalOpen } = useSelector((state: RootStore) => state.photosModule);

  const openFullSize = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(setCurrPic(photo));
    dispatch(toggleModal(!isModalOpen));
  };
  const onChangeTitle = async (title: string) => {
    dispatch(updateTitle(photo, title));
  };
  const onDeletePhoto = async (id: number) => {
    dispatch(deletePhoto(id))
    
  };
  return (
    <div className="CardContainer border border-secondary mb-5 m-3">
      <h5 className="m-3">{photo.title}</h5>
      <ChangeTitle onChangeTitle={onChangeTitle} txt={photo.title} />
      <div className="m-3 d-flex flex-row border-0 card justify-content-between ">
        <div
          className=" ThumbnailImg d-flex align-self-end"
          onClick={(ev) => openFullSize(ev)}
        >
          <img src={photo.thumbnailUrl} />
          <button onClick={() => onDeletePhoto(photo.id)}>delete</button>
        </div>
      </div>
    </div>
  );
};
export default PhotoPreview;
