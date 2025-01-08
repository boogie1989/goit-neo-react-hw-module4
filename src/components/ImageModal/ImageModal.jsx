import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.ImageModal}
      overlayClassName={css.ImageModalOverlay}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <div className={css.ImageModalContent}>
        <div className={css.ImageModalImage}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            onClick={onClose}
          />
        </div>
        <div className={css.ImageModalDetails} onClick={onClose}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {image.description || "No description available"}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
