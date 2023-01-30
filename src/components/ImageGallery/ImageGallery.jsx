import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.scss";

export default function ImageGallery({ cards, onClick }) {
  return (
    <div>
      <ul className="ImageGallery">
        {cards.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClick={onClick}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
}
