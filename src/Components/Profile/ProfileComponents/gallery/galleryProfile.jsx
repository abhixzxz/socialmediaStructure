// src/components/PhotoGallery.js
import React, { useState } from "react";
import Modal from "react-modal";
import { FiZoomIn } from "react-icons/fi";
import img1 from "../../../../assets/profile.jpg";
import img2 from "../../../../assets/profile.jpg";
import img3 from "../../../../assets/profile.jpg";
import img4 from "../../../../assets/profile.jpg";
import img5 from "../../../../assets/profile.jpg";
import "./PhotoGallery.css";

// Example photo data
const photos = [
  { id: 1, url: img1, caption: "Photo 1" },
  { id: 2, url: img2, caption: "Photo 2" },
  { id: 3, url: img3, caption: "Photo 2" },
  { id: 4, url: img4, caption: "Photo 2" },
  { id: 5, url: img5, caption: "Photo 2" },
];

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PhotoGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img
            src={photo.url}
            alt={photo.caption}
            onClick={() => openModal(photo)}
          />
          <div className="photo-caption">{photo.caption}</div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Photo Modal"
      >
        {selectedPhoto && (
          <>
            <img src={selectedPhoto.url} alt={selectedPhoto.caption} />
            <div>{selectedPhoto.caption}</div>
          </>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default PhotoGallery;
