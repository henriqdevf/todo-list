import styles from "./TaskList.module.css"
import {Task} from "./Task"
import type { TaskProp } from "../App";
import { ClipboardText } from "phosphor-react";

interface TaskListProps {
tasks: TaskProp[];
deleteTask: (taskId: number) => void;
toggleTaskCompletion: (taskId: number) => void;
}

export function TaskList({ tasks, deleteTask, toggleTaskCompletion }: TaskListProps) {
    const completedTasksCount = tasks.filter(task => task.isCompleted).length;

    return(
        
        <div className={styles.taskList}>
            <div className={styles.createdAndCompleted}>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas</span>
                    <span className={styles.quantity}>{tasks.length}</span>
                </div>

                <div className={styles.completedTasks}>
                    <span>Concluídas</span>
                    <span className={styles.quantity} >{`${completedTasksCount} de ${tasks.length}`}</span>
                </div>
            </div>

            <div className={styles.tasks}>
                {tasks.length > 0 && (tasks.map(itemTask => <Task task={itemTask} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion}/>)
                ) || (<div className={styles.emptyState}>
                    <ClipboardText size={54} className={styles.taskIcon} />
                    <p className={styles.emptyTaskDescription}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.emptyTaskDescriptionTwo}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
            </div>
        </div>
    )
}