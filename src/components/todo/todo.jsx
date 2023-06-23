import React from "react";

const Todo = ({id,title,completed,onChangeHandler})=>{
		return(
			<div onClick={()=>onChangeHandler(id)} className={`w-60 m-2 p-2 rounded-md border-gray-950 cursor-pointer ${completed?"bg-teal-500":"bg-red-700"} hover:scale-105`}>
				<h1>{title}</h1>
			</div>
		)
}

export default Todo;