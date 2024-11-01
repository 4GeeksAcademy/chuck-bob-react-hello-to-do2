import React, { useState, useEffect } from "react";
import Display from "./display";
import './Styles.css';
import LoginPage from "./loginpage";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [list, setList] = useState([""]);
	const [task, setTask] = useState("");
	const [view, setView] = useState("login-page");
	const [username, setUsername] = useState("");

	const [regUsers, setRegUsers] = useState(["George", "Marjorie", "Derek"]);

	const handleRemove = (indexToRemove) => {
		setList(list.filter((_, index) => index !== indexToRemove));
	};

	const addTask = (newTask) => {
		fetch('https://playground.4geeks.com/todo/todos/chuck-bob', {
			method: 'POST',
			body: JSON.stringify({
				"label": newTask,
				"is_done": false
			}),
			headers: { 'Content-type': 'application/json' }
		})
			.then((response) => response.json())
			.then(() => getFetch())
			.catch((err) => console.log(err));
	};

	// Function to fetch and update the task list
	const getFetch = () => {
		fetch('https://playground.4geeks.com/todo/users/chuck-bob')
			.then((response) => response.json())
			.then((jsonifiedData) => setList(jsonifiedData.todos))
			.catch((err) => console.log(err));
	};

	// Function to update a task's is_done status to true
	const updateTaskStatus = (task) => {
		const taskId = task.id; 
 		fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				label: task.label,
				is_done: true
			})
		})
		.then(response => response.json())
		.then(() => getFetch()) // Refresh the list after updating the task
		.catch(error => console.log(error));
	};

	useEffect(() => { getFetch() }, []);

	return (
		view !== "login-page" ? (
			<div className="text-center">{username}
				<div className="todoText">TO DO LIST</div>
				<div className="todoInput">
					<input 
						type="text" 
						value={task} 
						onChange={(e) => setTask(e.target.value)} 
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								addTask(task);
							}
						}} 
					/>
				</div>

				<div className="addButton">
					<button onClick={() => addTask(task)}> add </button>
				</div>

				<div className="displayList">
					{list.map((task, index) => (
						<Display 
							key={index} 
							task={task} 
							index={index} 
							handleRemove={handleRemove} 
							updateTaskStatus={updateTaskStatus} 
						/>
					))}
				</div>

			</div>
		)
			: (<LoginPage setUsername={setUsername} setView={setView} registered={regUsers} />)
	);
};

export default Home;
