import { useState } from "react"

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        const res = await fetch('http://localhost:8000/user/sign-up', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password}),
        });

        const data = await res.json();
        alert(data.message);
    }

    return (
        <div>
            <h2>Sign Up</h2>

            <input type="text" placeholder="Name" onChange={(n) => setName(n.target.value)} />
            <br />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" onChange={(p) => setPassword(p.target.value)} />
            <br />

            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};