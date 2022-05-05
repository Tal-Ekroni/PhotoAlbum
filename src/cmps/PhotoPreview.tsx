import { PhotosData } from "../store/actions/photosActionTypes"

interface Props {
    photo:PhotosData
}


const PhotoPreview:React.FC<Props>=({photo})=>{
    return (
      <div>{photo.id}</div>
    )
}
export default PhotoPreview
