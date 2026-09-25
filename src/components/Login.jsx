function Login({onLogin}) {
  return (
    <div className="login">
      <h2>Hospital Login</h2>

      <input
        type="email"
        placeholder="Enter your email"
      />

      <input
        type="password"
        placeholder="Enter your password"
      />

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;