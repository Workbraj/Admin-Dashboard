"use client";

import { useState } from "react";
import styles from "@app/ui/login/login.module.css";
import { useRouter } from "next/navigation"; // Correct import for useRouter

const Login = () => {
  const [error, setError] = useState(null);

  const login = {
    username: "admin",
    password: "nextjs",
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCredentials = [credentials.username, credentials.password];
    console.log("Entered Credentials: ", enteredCredentials);

    if (
      credentials.username === login.username &&
      credentials.password === login.password
    ) {
      console.log("Login successful");
      router.push("/dashboard");
      setCredentials({
        username: "",
        password: "",
      });
    } else {
      setError("Invalid username or password*");
    }
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="text-black-600">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
