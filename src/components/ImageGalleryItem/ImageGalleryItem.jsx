import { GalleryItem } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ id, src, onClick }) => {
  return (
    <GalleryItem key={id} onClick={onClick}>
      <img src={src} alt=""/>
    </GalleryItem>
  );
};
