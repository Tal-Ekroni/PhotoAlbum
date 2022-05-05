import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/main.css";
import PhotosList from "./cmps/PhotosList";
import { getPhotos } from "./store/actions/photosActions";
import { RootStore } from "./store/store";
const App: React.FC = () => {
  const dispatch: any = useDispatch();
  const { photos } = useSelector((state: RootStore) => state.photosModule);
  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  return (
    <div className="App photo-app">
     {photos&&<PhotosList photos={photos}/>}
    </div>
  );
};

export default App;
