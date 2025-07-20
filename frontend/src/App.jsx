import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "estudar progamação",
    description: "estudar progamação é muito importante",
    iscopleted: false,
  }, 
  {
    id: 2,
    title: "estudar inglês",
    description: "estudar inglês é muito importante",
    iscopleted: false,
  },
  {
    id: 3,
    title: "estudar matemática",
    description: "estudar matemática é muito importante",
    iscopleted: false,
  }
  ]);

function TaskClick(taskId) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, iscopleted: !task.iscopleted };
    }
    return task;
  });
  setTasks(newTasks);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
     <div className="w-[500px]">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} TaskClick={TaskClick} />
     </div>
      </div>
  );
}
 
export default App;