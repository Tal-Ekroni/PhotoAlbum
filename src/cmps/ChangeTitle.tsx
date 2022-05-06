import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTitle } from "../store/actions/photosActions";
import { PhotosData } from "../store/actions/photosActionTypes";
type Props = {
  onChangeTitle: Function;
  txt: string;
};
const ChangeTitle: React.FC<Props> = ({ onChangeTitle, txt }) => {
  const [titleTxt, setTitleTxt] = useState("");
  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setTitleTxt(value);
  };
  return (
    <div className="m-3 img-fluid">
      <input type="text" value={titleTxt} onInput={handleInput} />
      <button onClick={() => onChangeTitle(titleTxt)}>
        click to change title
      </button>
    </div>
  );
};
export default ChangeTitle;
