import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { TaskList } from "./Components/TaskList"

import "./global.css"

import styles from './App.module.css'
import { useEffect, useState } from "react";

export type TaskProp = {
  id: number;
  todo: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  function handleAddTask(newTask: string) {
    setTasks([...tasks, { id: Math.random(), todo: newTask, isCompleted: false }])
  }

  function deleteTask(deletedTaskId: number) {
    const DeletedTask = tasks.filter(task => task.id !== deletedTaskId)
    setTasks(DeletedTask)
  }

   function toggleTaskCompletion(taskId: number) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AddTask
          handleAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </main>
    </>
  )
}

export default App
