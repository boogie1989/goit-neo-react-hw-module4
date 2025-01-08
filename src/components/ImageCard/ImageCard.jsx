import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.ImageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
