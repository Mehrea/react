import { useState } from "react";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Doctors from "./components/Doctors";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar />

      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
       <div className="dashboard">
  <h1>Hospital Dashboard</h1>
  <p>Welcome to your dashboard</p>

  <div className="dashboard-cards">
    <div className="card">
      <h3>Doctors</h3>
      <p>10 Doctors</p>
    </div>
    

    <div className="card">
      <h3>Patients</h3>
      <p>50 Patients</p>
    </div>

    <div className="card">
      <h3>Appointments</h3>
      <p>20 Appointments</p>
    </div>
  </div>
  <div className="dashboard">
  <h1>Hospital Dashboard</h1>
  <p>Welcome to your dashboard</p>

  <div className="dashboard-cards">
    <div className="card">
      <h3>Doctors</h3>
      <p>10 Doctors</p>
    </div>

    <div className="card">
      <h3>Patients</h3>
      <p>50 Patients</p>
    </div>

    <div className="card">
      <h3>Appointments</h3>
      <p>20 Appointments</p>
    </div>
  </div>

  <Doctors />
</div>
</div>

      )}
    </div>
  );
}

export default App;

