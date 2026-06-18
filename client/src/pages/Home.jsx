import { useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
  try {
    const response = await fetch("http://localhost:5000/message");

    const data = await response.json();

    alert(data.message);

    setMessage(data.message);
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div>
      <h1>AI Resume Screening Platform</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
       <br />
       <br />
       <button onClick={getMessage}>
         Get Backend Message
       </button>
       <h2>{message}</h2>
    </div>
  );
}

export default Home;