import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch } from 'react-redux';
import { addTarefa } from '../redux/reducer/todoReducer';

export const TodoLista = ({ tarefas }) => {
  const [novaTarefa, setNovaTarefa ] = useState('');
  const dispatch = useDispatch();

  const handleAddTarefa = () => {
    dispatch(addTarefa(novaTarefa));
  };

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <TodoItem key={tarefa._id} task={tarefa} />
        ))}
      </ul>
      <div>
        <input 
          type="text" 
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={handleAddTarefa}>Adicionar Tarefa</button>
      </div>
    </div>
  )
};

