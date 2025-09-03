import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
function Footer({ language, setLanguage }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    };
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    return (_jsxs("footer", { className: "footer", children: [_jsx("h1", { children: _jsx("a", { href: "/", style: { textDecoration: "none", color: "inherit" }, children: "Antonela Gali\u0107" }) }), _jsxs("div", { className: "footer-controls", children: [_jsx("button", { onClick: toggleDarkMode, className: "dark-mode-btn", children: darkMode ? _jsx(FaSun, {}) : _jsx(FaMoon, {}) }), _jsxs("select", { value: language, onChange: handleLanguageChange, children: [_jsx("option", { value: "HR", children: "HR" }), _jsx("option", { value: "EN", children: "EN" })] })] })] }));
}
export default Footer;
