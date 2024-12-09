import css from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  return (
    <div className={css.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;
