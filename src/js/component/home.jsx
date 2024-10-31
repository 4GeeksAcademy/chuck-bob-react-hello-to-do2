import React, { useState, useEffect } from "react";
import Display from "./display";
import './Styles.css';
import LoginPage from "./loginpage";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [list, setList] = useState([""])
	const [task, setTask] = useState("")
	const [view, setView] = useState("login-page")
	const [username, setUsername] = useState("")

	const [regUsers, setRegUsers] = useState(["George", "Marjorie", "Derek"])


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
			.then((jsonifiedData) => getFetch())
			.catch((err) => console.log(err))
	};

	const getFetch = () => { fetch('https://playground.4geeks.com/todo/users/chuck-bob')
	.then((response) => response.json())
	.then((jsonifiedData) => setList(jsonifiedData.todos))
	.catch((err) => console.log(err));
	}


	useEffect(() => { getFetch()
	}, []);



	return (
		view !== "login-page" ? (
			<div className="text-center">{username}
				<div className="todoText">TO DO LIST</div>
				<div className="todoInput">
					<input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => {
						if (e.key === 'Enter') {
							addTask(task);
						}
					}} />
				</div>

				<div className="addButton">
					<button onClick={()=>addTask(task)}> add </button>
				</div >

				<div className="displayList">
					{list.map((task, index) => (<Display key={index} task={task} index={index} handleRemove={handleRemove} />))}
				</div>

			</div>
		)
			: (<LoginPage setUsername={setUsername} setView={setView} registered={regUsers} />)
	);
};

export default Home;
