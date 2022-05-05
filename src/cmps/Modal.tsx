import { useEffect, useState } from "react";

interface Props {
  onToggleModal: Function;
}

const PhotoPreview: React.FC<Props> = ({ onToggleModal }) => {
  const [data, setData] = useState({});
  useEffect(() => {
 
  }, []);
  return <div className="m-3">yo</div>;
};
export default PhotoPreview;
