import { useEffect } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Modal
      className={css.Modal}
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || "No description available"}</p>
      <p>Likes: {image.likes}</p>
      <p>Author: {image.user.name}</p>
    </Modal>
  );
};

export default ImageModal;
