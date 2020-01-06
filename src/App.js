import React from "react";
import "./App.css";
import { NavBar } from "./Components/Header/NavBar";
import { AppBody } from "./Components/Body/Appbody";
import { Footer } from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <AppBody />
            <Footer />
        </div>
    );
}

export default App;
