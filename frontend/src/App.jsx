import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []
);

  
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks/")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

   // Alternar estado de completado
  function TaskClick(taskId) {
    const task = tasks.find(t => t.id === taskId);
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_completed: !task.is_completed }),
    })
      .then(res => res.json())
      .then(updatedTask => {
        setTasks(tasks.map(t => (t.id === taskId ? updatedTask : t)));
      });
  }

// Deletar tarefa
  function DeleteTask(taskId) {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: "DELETE",
    }).then(() => {
      setTasks(tasks.filter((t) => t.id !== taskId));
    });
  }

function addTaskSubmit(title, description) {
    fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, is_completed: false }),
    })
      .then(res => res.json())
      .then(newTask => setTasks([...tasks, newTask]));
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
     <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
        </h1>

        <AddTask 
        addTaskSubmit={addTaskSubmit}
        />

        <Tasks 
        tasks={tasks} 
        TaskClick={TaskClick}
        DeleteTask={DeleteTask} 
        />

     </div>
      </div>
  );
}
 
export default App;