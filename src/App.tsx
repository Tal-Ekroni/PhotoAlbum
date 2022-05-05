import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/main.css";
import PhotosList from "./cmps/PhotosList";
import { getPhotos } from "./store/actions/photosActions";
import { RootStore } from "./store/store";
import Modal from './cmps/Modal'
import "bootstrap/dist/css/bootstrap.min.css";
const App: React.FC = () => {
  const dispatch: any = useDispatch();
  const { photos } = useSelector((state: RootStore) => state.photosModule);
  useEffect(() => {
    // dispatch(getPhotos());
  }, []);
  const arr=[
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
      }
  ]
  if (!photos) return <div>loading...</div>;
  return (
    <div className="App">
      <header className="AppHeader h3 d-flex justify-content-center align-items-center">
        Photo Album
      </header>
      <PhotosList photos={arr} />
      {/* <Modal /> */}
    </div>
  );
};

export default App;
