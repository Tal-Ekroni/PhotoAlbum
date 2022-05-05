import { useDispatch } from "react-redux";
import { setCurrPic } from "../store/actions/photosActions";
import { PhotosData } from "../store/actions/photosActionTypes";

interface Props {
  photo: PhotosData;
}

const PhotoPreview: React.FC<Props> = ({ photo }) => {
  const dispatch: any = useDispatch();
const test=()=>{
dispatch(setCurrPic(photo))
}
  return (
    <div className="CardContainer border border-secondary mb-5 m-3">
      <h2 className="m-3">{photo.title}</h2>
      <div className="m-3 d-flex flex-row border-0 card justify-content-between ">
        <div className="CardImg" onClick={test}>
          <img src={photo.url} />
        </div>
        <div className=" ThumbnailImg d-flex align-self-end">
          <img src={photo.thumbnailUrl} />
        </div>
      </div>
    </div>
  );
};
export default PhotoPreview;
