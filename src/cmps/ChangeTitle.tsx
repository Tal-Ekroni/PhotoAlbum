import { useState } from "react";

type Props = {
  onChangeTitle:Function;
  txt: string;
};
const ChangeTitle: React.FC<Props> = ({ onChangeTitle, txt }) => {
  const [titleTxt, setTitleTxt] = useState(txt);
  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setTitleTxt(value);
  };
  return (
    <div className=" ChangeTitle">
      <input type="text" value={titleTxt} onInput={handleInput} />
      
    </div>
  );
};
export default ChangeTitle;
