import React , { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

//create your first component
const Display = (props) => {
let {task,handleRemove,index} = props;
	

	return (
		<div className="list">{task}
        <button onClick= {()=> handleRemove(index)}>X</button>
        </div>
	);
};

export default Display;
