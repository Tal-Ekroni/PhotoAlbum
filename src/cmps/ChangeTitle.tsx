import { useState } from "react";
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
    <div className="m-3 img-fluid d-flex flex-column ChangeTitle">
      <input type="text" value={titleTxt} onInput={handleInput} />
      <button className="btn btn-light" onClick={() => onChangeTitle(titleTxt)}>
        Change title
      </button>
    </div>
  );
};
export default ChangeTitle;
