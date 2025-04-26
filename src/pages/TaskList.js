


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import tasks from '../data/tasks.json';
import styles from './TaskList.module.css';

export default function TaskList() {
  const [expandedId, setExpandedId] = useState(null);
  const nav = useNavigate();

  const handleToggle = id =>
    setExpandedId(prev => (prev === id ? null : id));
  const handleNav = id => nav(`/task/${id}`);

  // If you want to “fetch at least one” from remote, you could replace
  // `tasks` here with a `useEffect` + fetch() call.
  // const sample = tasks.slice(0,1);  

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Explore Tasks</h1>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          isExpanded={expandedId === task.id}
          onToggle={handleToggle}
          onNavigate={handleNav}
        />
      ))}
    </div>
  );
}