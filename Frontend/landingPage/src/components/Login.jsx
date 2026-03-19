import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        
        const data = await res.json();
        alert(data.message);
    };

    return (
        <div>
            <h2>Login</h2>

            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" onChange={(p) => setPassword(p.target.value)} />
            <br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};