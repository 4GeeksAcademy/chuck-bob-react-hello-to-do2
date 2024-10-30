import React , { useState } from "react";
import Display from "./display";
import './Styles.css';
import LoginPage from "./loginpage";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [list, setList] = useState(["derek"])
	const [task, setTask] = useState("")
	const [view, setView] = useState("login-page")
	const [username, setUsername] = useState("")

	const [regUsers, setRegUsers] = useState(["George", "Marjorie", "Derek"])


	const handleRemove = (indexToRemove) => {
		setList(list.filter((_, index) => index !== indexToRemove));
	};

	const addTask = () => setList([...list, task]);

	

	return (
		view !== "login-page" ? (
		<div className="text-center">{username}
			<div className="todoText">TO DO LIST</div>
			<div className="todoInput">
				<input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => {
						if (e.key === 'Enter') {
							addTask();
						}
					}}  />
			</div>

			<div className="addButton">
				<button onClick={addTask}> add </button>
			</div >
			
			<div className="displayList">
				{list.map((task, index) => (<Display key={index} task={task} index={index} handleRemove={handleRemove} /> ))}
			</div>
			
		</div>
		)
		: (<LoginPage setUsername={setUsername} setView={setView} registered={regUsers}/>)
	);
};

export default Home;
