import React from "react";
import PropTypes from "prop-types";

const Display = (props) => {
	
	let { task, handleRemove, index } = props;
  
	return (
	  <div className="list">
		
		{task.label} - {task.is_done ? "Done" : "Pending"}
		
		{/* Button to remove the task by calling handleRemove and passing the task's index */}
		<button onClick={() => handleRemove(index)}>X</button>
		
		{/* Conditionally render the "Mark as Done" button if the task is not done yet */}
		{!task.is_done && (
		  <button onClick={() => props.updateTaskStatus(task)}>Mark as Done</button>
		)}
	  </div>
	);
  };

Display.propTypes = {
  task: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  updateTaskStatus: PropTypes.func.isRequired
};

export default Display;
