import { useState } from "react"
import styles from "./AddTask.module.css"
import { PlusCircle } from 'phosphor-react'

interface AddTaskProps {
    handleAddTask: (task: string) => void;
}

export function AddTask({ handleAddTask,  }: AddTaskProps) {
    const [value, setValue] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function handleCreateTask(event: React.MouseEvent<HTMLButtonElement> ) {
        event.preventDefault()
        handleAddTask(value)
        setValue('')
    }

    return(
        <form className={styles.inputAndButton}>
            <input
            value={value} 
            onChange={handleChange} 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            />
            <button onClick={handleCreateTask} type="submit">Criar <PlusCircle size={20} className={styles.btnIcon} /></button>
        </form>
    )
}