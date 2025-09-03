import "./index.css"; // import CSS za Hero komponentu

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Antonela Galić</h1>
          <p>
            Trenutna prvostupnica informatike te buduća magistrica, smjera
            Podatkovna znanost i inženjerstvo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
