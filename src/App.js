import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Navbar";
function App() {
    const [language, setLanguage] = useState("HR");
    return (_jsxs(Router, { children: [_jsx(Home, { language: language, setLanguage: setLanguage }), _jsx(Footer, { language: language, setLanguage: setLanguage })] }));
}
export default App;
