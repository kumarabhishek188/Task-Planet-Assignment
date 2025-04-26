
import React from 'react';
import styles from './TaskCard.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function TaskCard({ task, isExpanded, onToggle, onNavigate }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left} onClick={() => onToggle(task.id)}>
          <img
            src={require(`../assets/logos/${task.logo}`)}
            className={styles.logo}
            alt={task.title}
          />
          <div className={styles.info}>
            <p className={styles.title}>{task.title}</p>
            <p className={styles.id}>Task ID – {task.id}</p>
            <div className={styles.stats}>
              <span className={styles.statItem}>
                ⭐ {task.points}
              </span>
              <span className={styles.statItem}>
                ⏱ {task.duration}
              </span>
              <span className={styles.statItem}>
                👥 {task.completions}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.toggle} onClick={() => onToggle(task.id)}>
          {isExpanded ? <FiChevronUp/> : <FiChevronDown/>}
        </div>
      </div>

      {isExpanded && (
        <div className={styles.details}>
          <p className={styles.desc}>{task.fullDesc}</p>
          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.start}`}>
              Start Task
            </button>
            <button className={`${styles.btn} ${styles.share}`}>
              Share
            </button>
          </div>
          <button
            className={styles.detailBtn}
            onClick={() => onNavigate(task.id)}
          >
            View Full Details
          </button>
        </div>
      )}
    </div>
  );
}