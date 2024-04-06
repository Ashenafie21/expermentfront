import { useState } from "preact/hooks";
// import { Router, Route } from "preact-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Login from "./Login";
import Flower from "./Flower";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/flower" element={<Flower />} />
            </Routes>
        </Router>
    );
}
