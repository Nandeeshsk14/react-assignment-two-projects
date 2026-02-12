import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`} 
      onClick={() => onToggle(task.id)}
    >
      <span className="task-text">{task.text}</span>
      <span className="status-icon">
        {task.completed ? "✅" : "⬜"}
      </span>
    </div>
  );
};

export default Task;