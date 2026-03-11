export default function ParallaxDivider({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="image-break">
      <img src={src} alt={alt} className="parallax-img" />
    </section>
  );
}
