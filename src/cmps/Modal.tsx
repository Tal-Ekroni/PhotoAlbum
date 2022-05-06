import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/actions/photosActions";
import { RootStore } from "../store/store";

const Modal: React.FC = () => {
  const dispatch: any = useDispatch();
  const { currPic, isModalOpen } = useSelector(
    (state: RootStore) => state.photosModule
  );
  const onCloseModal = () => {
    dispatch(toggleModal(!isModalOpen));
  };

  if (!currPic) return <div>loading...</div>;
  return (
    <div className="PhotoModal m-3 bg-light d-flex flex-column ">
      <h3 className="m-3">{currPic.title}</h3>
      <div className="img-fluid  ">
        <img src={currPic.url} alt="" />
      </div>
      <button type="button" className="btn btn-light" onClick={onCloseModal}>
        close
      </button>
    </div>
  );
};
export default Modal;
