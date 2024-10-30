import React , { useState } from "react";
import Display from "./display";
import './Styles.css';



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [list, setList] = useState(["derek"])
	const [task, setTask] = useState("")


	const handleRemove = (indexToRemove) => {
		setList(list.filter((_, index) => index !== indexToRemove));
	};


	return (
		<div className="text-center">

			<div className="todoInput">
				<input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
			</div>

			<div className="addButton">
				<button onClick={() => setList([...list, task])}> add </button>
			</div >
			
			<div className="displayList">
				{list.map((task, index) => (<Display key={index} task={task} index={index} handleRemove={handleRemove} /> ))}
			</div>
		</div>
	);
};

export default Home;
