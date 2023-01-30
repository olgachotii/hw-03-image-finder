import React from "react";
import "./ImageGalleryItem.scss";

export default function ImageGalleryItem({
  webformatURL,
  tags,
  onClick,
  largeImageURL,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </li>
  );
}
