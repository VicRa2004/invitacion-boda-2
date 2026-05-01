export default function ParallaxDivider({
  src = "/img-2.jpg",
  alt = "Detalle fotográfico",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <section className="image-break">
      <img src={src} alt={alt} className="parallax-img" />
    </section>
  );
}
