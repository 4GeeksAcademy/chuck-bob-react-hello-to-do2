import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

// Create the LoginPage component
const LoginPage = ({ setUsername, setView }) => { // Accept setView as a prop
	return (
		<div className="welcome-page">
			<div className="welcome-message">
				Welcome to the world's sketchiest bank! Please enter your username and password below:
			</div>
			<div className="username">
				<label>Username:</label> <input type="text" onChange={(e)=> setUsername(e.target.value)} />
			</div>
			<div className="password">
				<label>Password:</label> <input type="password" />
			</div>
			<div className="login-button">
				<button onClick={() => setView("accountView")}>Login</button>
			</div>
		</div>
	);
};

export default LoginPage;