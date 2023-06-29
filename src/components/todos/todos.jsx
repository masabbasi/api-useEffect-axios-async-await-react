import React, { useEffect, useState } from "react";
import { data } from "../../API/api.js";
import Todo from "../todo/todo.jsx";
import Loading from "../loading/loading.jsx";

const Todos = () => {
  const [myToDo, setMyToDo] = useState([]);
	let [showMore,setShowMore] = useState(1);
	
	const onClickHandler = ()=>{
		if (showMore < 21) {
			setShowMore(showMore+1)
		}
	}

	// const onChangeHandler = (id)=>{
	// 	const findTodo = myToDo.filter((todo)=>{if (todo.id===id) {
	// 		todo.completed = !todo.completed
	// 	}})
	// 	setMyToDo([...myToDo,findTodo])
	// }

	// const onChangeHandler = (id)=>{
	// 	const findToDo = myToDo.find((todo)=>{return todo.id===id})
	// 	if (findToDo.completed) {
	// 		const changeTodo = (findToDo.completed=false)
	// 		setMyToDo([...myToDo,changeTodo]);
	// 	} else {
	// 		const changeTodo = (findToDo.completed=true)
	// 		setMyToDo([...myToDo,changeTodo]);
	// 	}
	// }

	const onChangeHandler = (id)=>{
		const updateToDoList = myToDo.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				};
			} else {
				return todo;
			}
		});
		setMyToDo(updateToDoList);
	}

	// const onChangeHandler = (id)=>{
	// 	const findToDo = myToDo.find((todo)=>{return todo.id===id})
	// 	console.log(findToDo);
	// 	if (findToDo.completed) {
	// 		const changeTodo = {...findToDo,completed:false}
	// 		console.log(changeTodo);
	// 		setMyToDo([...myToDo,findToDo]);
	// 	} else {
	// 		const changeTodo = {...findToDo,completed:true}
	// 		console.log(changeTodo);
	// 		setMyToDo([...myToDo,findToDo]);
	// 	}
	// }

  const getTodo = async () => {
    const toDoItems = await data();
    setMyToDo(toDoItems);
  };

  useEffect(() => {
    setTimeout(() => {
      getTodo();
    }, 3000);
  }, []);

  return (
		<div className="flex flex-col">
    <div className="flex justify-center items-center flex-wrap">
      {myToDo.length > 0 ? myToDo.slice(0,(showMore*50)).map((todo) => {return <Todo key={crypto.randomUUID()} {...todo} onChangeHandler={onChangeHandler} />}):<Loading />}
    </div>
			{(showMore===4 || myToDo.length<1) ? "" : <button onClick={onClickHandler} className="bg-lime-500 p-3 text-neutral-200 m-3 rounded-md">Show More</button>}
		</div>
  );
}

export default Todos;
