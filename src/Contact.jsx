import { useRef, useState, useEffect } from "react";

function Contact({ language }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const texts = {
    HR: {
      title: "Kontakt",
      name: "Ime",
      email: "Email",
      message: "Poruka",
      send: "Pošalji",
    },
    EN: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
  };

  const t = texts[language];

  // Intersection Observer za animaciju pri scrollu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // animacija se pokreće samo jednom
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={containerRef}>
      <div className={`contact-container ${visible ? "visible" : ""}`}>
        <h2>{t.title}</h2>
        <form
          className="contact-form"
          action="mailto:tvojemail@domena.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder={t.name} required />
          <input type="email" name="email" placeholder={t.email} required />
          <textarea name="message" placeholder={t.message} required></textarea>
          <button type="submit">{t.send}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
