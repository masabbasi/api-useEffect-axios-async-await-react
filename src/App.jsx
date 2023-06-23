import "./app.css";
import Todos from "./components/todos/todos.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <Todos />
    </div>
  );
};

export default App;
