import { Trash } from "phosphor-react";

import styles from "./Task.module.css";
import type { TaskProp } from "../App";

interface TaskComponentProps {
task: TaskProp;
deleteTask: (taskId: number) => void;
toggleTaskCompletion: (taskId: number) => void;
}

export function Task({ task, deleteTask, toggleTaskCompletion }: TaskComponentProps) {

    function handleCheckValue() {
        toggleTaskCompletion(task.id)
    }

    function handleDeleteComment() {
        deleteTask(task.id)
    }

    return(
        <div className={styles.taskBox}>
            <div className={styles.taskName}>
                <input
                checked={task.isCompleted}
                onChange={handleCheckValue} 
                className={styles.checkbox} 
                type="checkbox"             
                />
                <p className={task.isCompleted ? styles.checked : styles.notChecked}>{task.todo}</p>
            </div>
            <button onClick={handleDeleteComment}>
                <Trash className={styles.trashIcon} size={20}/>
            </button>
        </div>
    )
}