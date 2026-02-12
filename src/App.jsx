import React, { useState, useEffect } from "react";
import "./App.css";

// ==========================================
// PROJECT 1: INTERACTIVE PROFILE CARD SYSTEM
// ==========================================

const ProfileCard = ({ name, role, description }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">{name.charAt(0)}</div>
        <h3>{name}</h3>
        <span className="profile-role">{role}</span>
      </div>
      <p className="profile-desc">{description}</p>
      <button 
        className={`follow-btn ${isFollowing ? "active" : ""}`}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

// ==========================================
// PROJECT 2: TASK TRACKER
// ==========================================

const Task = ({ task, onToggle }) => {
  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <span>{task.text}</span>
      <span>{task.completed ? "✅" : "⬜"}</span>
    </div>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish React Assignment", completed: false },
    { id: 2, text: "Push to GitHub", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="task-tracker">
      <h3>Task Tracker</h3>
      <div className="input-group">
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="New task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// MAIN APP COMPONENT (Combines Both)
// ==========================================

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Data for Project 1
  const users = [
    { id: 1, name: "Alice Johnson", role: "Frontend Dev", description: "Loves React & CSS." },
    { id: 2, name: "Bob Smith", role: "Backend Dev", description: "Expert in Node.js." },
    { id: 3, name: "Charlie Brown", role: "Designer", description: "UI/UX enthusiast." },
  ];

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <header>
        <h1>React Assignment: Two Projects</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main>
        {/* SECTION 1: PROFILE CARDS */}
        <section className="project-section">
          <h2>Project 1: Profile Cards</h2>
          <div className="profiles-grid">
            {users.map(user => (
              <ProfileCard key={user.id} {...user} />
            ))}
          </div>
        </section>

        <hr />

        {/* SECTION 2: TASK TRACKER */}
        <section className="project-section">
          <h2>Project 2: Task Tracker</h2>
          <TaskList />
        </section>
      </main>
    </div>
  );
}

export default App;