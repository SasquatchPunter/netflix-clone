function HeroSection({ src }) {
  return (
    <section className="hero-section">
      <img src={src} className="hero-section__billboard" />
    </section>
  );
}

export default HeroSection;
