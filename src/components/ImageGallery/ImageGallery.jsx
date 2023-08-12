import { ImageGalleryItem } from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} onClick={onClick}/>
      ))}
    </Gallery>
  );
};
