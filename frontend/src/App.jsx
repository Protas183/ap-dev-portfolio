import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/Pages/About/About.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="app">
            <Header />
                <main>
                    <About />

                </main>
            <Footer />
        </div>
    )
}

export default App
