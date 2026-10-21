import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";
import About from "./components/Pages/About/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
            <Footer />

        </BrowserRouter>
    );
}

export default App;