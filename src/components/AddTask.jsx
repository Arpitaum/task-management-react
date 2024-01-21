import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const AddTask = () => {
  const { tasksDispatch } = useGlobalContext();
  const [task, setTask] = useState("");
  const [editingTask, setEditingTask] = useState(null); // New state for editing

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    if (e.key !== "Enter") return;
    if (task === "") return;

    if (editingTask !== null) {
      // If editing, dispatch the "EDIT_TASK" action
      tasksDispatch({ type: "EDIT_TASK", payload: { id: editingTask, text: task } });
      setEditingTask(null);
    } else {
      // If not editing, dispatch the "ADD_TASK" action
      tasksDispatch({ type: "ADD_TASK", payload: task });
    }

    setTask("");
  }

  return (
    <>
      <input type="text" name="task" id='add-task-box' placeholder="Add New Task" value={task} onChange={handleChange} onKeyDown={handleSubmit} />
    </>
  )
}

export default AddTask;
