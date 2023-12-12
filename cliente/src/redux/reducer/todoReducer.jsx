import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tarefas: []
}

const tarefaSlice = createSlice({
  name: "tarefa",
  initialState,
  reducers: {
    addTarefa: (state, action) => {
      state.tarefas.push({ mensagem: action.payload  })
    },
    deletarTarefa: (state, action) => {
      state.tasks.splice(action.payload, 1);
    }
    // add outras como editar..
  }
})

export const { addTarefa, deletarTarefa} = tarefaSlice.actions;
export default tarefaSlice.reducer
