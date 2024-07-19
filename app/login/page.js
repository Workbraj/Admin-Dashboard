"use client";

import { useState } from "react";
import styles from "@app/ui/login/login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = {
    username: process.env.NEXT_PUBLIC_LOGIN_USERNAME,
    password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD,
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      credentials.username === login.username &&
      credentials.password === login.password
    ) {
      setLoading(true);
      console.log("Login successful");
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Login;
