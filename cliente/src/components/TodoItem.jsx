import React from "react"
import { useDispatch } from "react-redux"
import { deletarTarefa } from "../redux/reducer/todoReducer";

export const TodoItem = ({ tarefa }) => {
  const dispatch = useDispatch();

  const handleDeletar = () => {
    dispatch(deletarTarefa(task._id))
  }

  return  (
    <div>
      <p>{ tarefa.mensagem }</p>
      <button onClick={handleDeletar}></button>
    </div>
  );
};