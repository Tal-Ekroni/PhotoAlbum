import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/main.css";
import PhotosList from "./cmps/PhotosList";
import { getPhotos } from "./store/actions/photosActions";
import { RootStore } from "./store/store";
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
const App: React.FC = () => {
  const dispatch: any = useDispatch();
  const { photos } = useSelector((state: RootStore) => state.photosModule);
  useEffect(() => {
    // dispatch(getPhotos());
  }, []);
  if (!photos) return <div>loading...</div>;
  return (
    <div className="d-flex justify-content-center">
      <header className="AppHeader">Photo Album</header>
      <PhotosList photos={photos} />
     <Button>okok</Button>
    </div>
  );
};

export default App;
