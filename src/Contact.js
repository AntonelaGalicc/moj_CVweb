import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // animacija se pokreće samo jednom
                }
            });
        }, { threshold: 0.3 });
        if (containerRef.current)
            observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);
    return (_jsx("section", { className: "contact", id: "contact", ref: containerRef, children: _jsxs("div", { className: `contact-container ${visible ? "visible" : ""}`, children: [_jsx("h2", { children: t.title }), _jsxs("form", { className: "contact-form", action: "mailto:tvojemail@domena.com", method: "POST", encType: "text/plain", children: [_jsx("input", { type: "text", name: "name", placeholder: t.name, required: true }), _jsx("input", { type: "email", name: "email", placeholder: t.email, required: true }), _jsx("textarea", { name: "message", placeholder: t.message, required: true }), _jsx("button", { type: "submit", children: t.send })] })] }) }));
}
export default Contact;
