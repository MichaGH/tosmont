export default function ExpandingGallery({ images }) {
  // ensure we always have exactly 3 images
  const displayedImages = images.slice(0, 3);

  return (
    <div className="w-full">
      <div className="expanding-gallery">
        {displayedImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}