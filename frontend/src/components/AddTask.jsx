import { useState } from "react";

function AddTask({ addTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-400 p-4 rounded-md shadow space-y-4 flex flex-col">
      <input 
        type="text" 
        placeholder="Digite o título da tarefa" 
        className="border-slate-300 outline-slate-400 px-4 py-4 rounded-md font-medium"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input 
        type="text" 
        placeholder="Digite a descrição da tarefa" 
        className="border-slate-300 outline-slate-400 px-4 py-4 rounded-md font-medium"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button onClick={() => {
        // verificar se os campos estão preenchidos
        if (!title.trim() || !description.trim()) {
          alert("Por favor, preencha todos os campos.");
          return;
        }
        // chamar a função addTaskSubmit com os valores dos campos
        addTaskSubmit(title, description);
        setTitle("");
        setDescription("");
      }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Adicionar
          </button>
    </div>
  );
}

export default AddTask;
