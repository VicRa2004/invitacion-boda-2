export default function Hero() {
  return (
    <>
      <div className="hero-image-container">
        <img
          src="https://picsum.photos/id/1014/800/600"
          alt="Homero y Larissa"
          className="hero-image"
        />
        <div className="torn-edge"></div>
      </div>
      <section className="hero">
        <p className="pre-title">Nuestra Boda</p>
        <h1 className="names">
          Homero
          <br />
          <span>&</span>
          <br />
          Larissa
        </h1>
      </section>
    </>
  );
}
