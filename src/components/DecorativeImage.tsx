export default function DecorativeImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="decorative-image-section">
      <img src={src} alt={alt} className="decorative-img" />
    </section>
  );
}
