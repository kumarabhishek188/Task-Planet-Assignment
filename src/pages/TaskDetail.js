
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tasks from '../data/tasks.json';
import styles from './TaskDetail.module.css';

export default function TaskDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const task = tasks.find(t => t.id === id);

  if (!task) return <p>Task not found.</p>;

  return (
    <div className={styles.detail}>
      <button className={styles.back} onClick={() => nav(-1)}>
        ← Back
      </button>

      <div className={styles.header}>
        <img
          src={require(`../assets/logos/${task.logo}`)}
          className={styles.logo}
          alt={task.title}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{task.title}</h2>
          <p className={styles.id}>Task ID – {task.id}</p>
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.statItem}>⭐ {task.points}</span>
        <span className={styles.statItem}>⏱ {task.duration}</span>
        <span className={styles.statItem}>👥 {task.completions}</span>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.start}`}>Start Task</button>
        <button className={`${styles.btn} ${styles.share}`}>Share</button>
      </div>

      <section className={styles.section}>
        <h3>About This Task</h3>
        <p>{task.fullDesc}</p>
      </section>

      {/* Example Earnings Box */}
      <section className={styles.earnings}>
        <div className={styles.earnRow}>
          <span>Free User</span>
          <span>100 ⭐</span>
        </div>
        <div className={styles.earnRow}>
          <span>Premium User (+5%)</span>
          <span>105 ⭐</span>
        </div>
        <div className={styles.earnRow}>
          <span>Premium Plus (+10%)</span>
          <span>110 ⭐</span>
        </div>
      </section>

      <button className={styles.upload}>Choose File</button>
      <button className={styles.submit}>Submit Task</button>
    </div>
  );
}