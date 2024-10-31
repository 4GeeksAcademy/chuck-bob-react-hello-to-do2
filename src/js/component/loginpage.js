import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const LoginPage = ({ setUsername, setView, registered }) => { 
	const [inputUsername, setInputUsername] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// Function to handle login and validate username
	const handleLogin = () => {
		if (registered.includes(inputUsername)) {
			setUsername(inputUsername);
			setView("accountView"); // Switch view if username is valid
			setErrorMessage(""); // Clear any previous error message
		} else {
			setErrorMessage("Invalid username. Please try again.");
		}
	};

	return (
		<div className="welcome-page">
			<div className="welcome-message">
				Welcome to the world's fanciest list! <br /> Please enter your username and password below:
			</div>
			<div className="username">
				<label>Username:</label> 
				<input 
					type="text" 
					value={inputUsername}
					onChange={(e) => setInputUsername(e.target.value)} 
				/>
			</div>
			<div className="password">
				<label>Password:</label> 
				<input type="password" />
			</div>
			<div className="login-button">
				<button onClick={handleLogin}>Login</button>
			</div>
			{errorMessage && <div className="error-message">{errorMessage}</div>}
		</div>
	);
};

export default LoginPage;
