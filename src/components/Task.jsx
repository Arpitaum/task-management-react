import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const Task = ({ task }) => {
  const { tasksDispatch } = useGlobalContext();
  const [editMode, setEditMode] = useState(false); // New state for editing mode
  const [editedTask, setEditedTask] = useState(task.text);

  const handleDelete = () => {
    tasksDispatch({ type: "DELETE_TASK", payload: { id: task.id } });
  }

  const toggleTaskStatus = () => {
    tasksDispatch({ type: "TOGGLE_TASK_STATUS", payload: { id: task.id } });
  }

  const handleEdit = () => {
    setEditMode(true);
  }

  const handleEditSubmit = () => {
    tasksDispatch({ type: "EDIT_TASK", payload: { id: task.id, text: editedTask } });
    setEditMode(false);
  }

  return (
    <li style={{ display: "flex", alignItems: "center", borderLeft: (task.isCompleted ? "3px solid green" : "3px solid red") }}>
      {editMode ? (
        <>
          <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ flex: 1, textDecoration: (task.isCompleted ? "line-through" : "none") }}>
            {task.text}
          </span>
          <span>
            <button className="task-btn mark-comp-btn" onClick={toggleTaskStatus} style={{ background: (task.isCompleted ? "green" : "none") }}>&#x2714;</button>
            <button className="task-btn delete-btn" onClick={handleDelete}>X</button>
            <button className="task-btn edit-btn" onClick={handleEdit}>Edit</button>
          </span>
        </>
      )}
    </li>
  )
}

export default Task;
