import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/store";

const PhotoPreview: React.FC = () => {
  const { currPic } = useSelector((state: RootStore) => state.photosModule);

  if (!currPic) return <div>loading...</div>;
  return (
    <div className="m-3 img-fluid">
      <img src={currPic.url} alt="" />
    </div>
  );
};
export default PhotoPreview;
