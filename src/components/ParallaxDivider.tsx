export default function ParallaxDivider({
  src = "/img-8.jpg",
  alt = "Detalle fotográfico",
  portrait = false,
}: {
  src?: string;
  alt?: string;
  portrait?: boolean;
}) {
  if (portrait) {
    return (
      <section className="image-break image-break--portrait">
        <img src={src} alt={alt} className="parallax-img parallax-img--portrait" />
      </section>
    );
  }

  return (
    <section className="image-break">
      <img src={src} alt={alt} className="parallax-img" />
    </section>
  );
}
