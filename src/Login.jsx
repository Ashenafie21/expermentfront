import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the input fields are empty
    if (!phone || !email || !password) {
        setMessage("Please fill in all fields.");
        return;
    }
    try {
        const response = await axios.post(
            "https://expermentbackend.onrender.com:4000/login",
            {
                phone,
                email,
                password,
            }
        );
        setMessage(response.data);
        // Check if login was successful, then navigate to the flower page
        if (response.status === 200) {
            navigate("/flower"); // Navigate to "/flower" route
        }
    } catch (error) {
        setMessage(error.response.data);
    }
};

    return (
        <div className="container">
            <h2>Login to see your gift</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="phone">Enter your phone number:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="email">Enter your email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Enter your password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div id="message">{message}</div>
        </div>
    );
};

export default Login;
