import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ImageGallery = ({ images, onImageClick, searchPerformed }) => {
  // Отображаем сообщение об ошибке только после поиска
  if (searchPerformed && (!images || images.length === 0)) {
    return <ErrorMessage message="No images found." />;
  }

  return (
    <div className={css.gallery}>
      <ul className={css.imageList}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} className={css.imageItem}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;



