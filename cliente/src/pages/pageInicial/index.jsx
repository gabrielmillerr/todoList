import React from "react";
import { useSelector} from 'react-redux';

import { TodoLista } from "../../components/TodoLista"

export const PageInicial = () => {
  const tarefas = useSelector((state) => state.tarefa.tarefas);

  return (
    <div>
      <h1>Todo Lista</h1>
      <TodoLista tarefas={tarefas}/>
    </div>
  )
}