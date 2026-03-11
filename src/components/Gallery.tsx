export default function Gallery() {
  const images = [1011, 1012, 1062, 1074, 1084];
  return (
    <section className="gallery-section">
      <h2 className="section-title">Nuestra Historia</h2>
      <div className="carousel">
        {images.map((imageId, index) => (
          <img
            key={imageId}
            src={`https://picsum.photos/id/${imageId}/400/500`}
            alt={`Galería foto ${index + 1}`}
            className="carousel-item"
          />
        ))}
      </div>
      <p className="carousel-hint">
        Desliza para ver más <span>→</span>
      </p>
    </section>
  );
}
