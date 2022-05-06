import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/main.css";
import PhotosList from "./cmps/PhotosList";
import { getPhotos, toggleModal } from "./store/actions/photosActions";
import { RootStore } from "./store/store";
import Modal from "./cmps/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPhoto from "./cmps/AddPhoto";

const App: React.FC = () => {
  
  const dispatch: any = useDispatch();
  const { photos, isModalOpen } = useSelector(
    (state: RootStore) => state.photosModule
  );

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  if (!photos) return <div>loading...</div>;
  return (
    <div className="App">
      <header className="AppHeader h3 d-flex justify-content-center align-items-center">
        Photo Album
      </header>
      <AddPhoto />
      <PhotosList photos={photos} />
      {isModalOpen && <Modal />}
    </div>
  );
};

export default App;
