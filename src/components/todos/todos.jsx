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

	const onChangeHandler = (id)=>{
		const findTodo = myToDo.filter((todo)=>{if (todo.id===id) {
			todo.completed = !todo.completed
		}})
		console.log(findTodo);
		setMyToDo([...myToDo,findTodo])
	}

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
