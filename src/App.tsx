import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/css/main.css";
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
      <header className="App-header"></header>
    </div>
  );
};

export default App;
