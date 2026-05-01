import ScrollReveal from "./ScrollReveal";

const images = [
  { src: "/img-1.jpg", alt: "Homero y Larissa, foto 1" },
  { src: "/img-2.jpg", alt: "Homero y Larissa, foto 2" },
  { src: "/img-3.jpg", alt: "Homero y Larissa, foto 3" },
  { src: "/img-4.jpg", alt: "Homero y Larissa, foto 4" },
  { src: "/img-5.jpg", alt: "Homero y Larissa, foto 5" },
];

export default function Gallery() {
  return (
    <section className="section-light">
      <ScrollReveal>
        <h2 className="section-title text-center">Nuestra Historia</h2>
        <div className="carousel">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="carousel-item"
            />
          ))}
        </div>
        <p className="carousel-hint text-center">Desliza para ver más →</p>
      </ScrollReveal>
    </section>
  );
}
