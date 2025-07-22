import { BotIcon, ChevronRightIcon, DeleteIcon, Home, HomeIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, TaskClick, DeleteTask }) {
  const navigate = useNavigate();

  function handleTaskClick(task) {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
         <li key={task.id} className="flex gap-2"> 
          <button 
          onClick= {() => TaskClick(task.id)}
           className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
            task.isCompleted && "line-through"
            }`}
           >
            {task.title}
            </button>

          <button onClick={() => handleTaskClick(task)} className="bg-slate-600 text-white p-2 rounded-md">
            <ChevronRightIcon/>
            </button>

            <button 
            onClick={() => DeleteTask(task.id)}
            className="bg-slate-600 text-white p-2 rounded-md">
            <TrashIcon />
            </button>
            
          </li>
      ))}
      </ul>
  );
}

export default Tasks;