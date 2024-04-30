import { useState } from "react";
import './ToDoStyles.css'

const ToDoForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('');
    function handleSubmit(ev) {
        ev.preventDefault();
        if (taskName === '') return;
        onAdd(taskName);
        setTaskName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text"
                value={taskName}
                onChange={ev => setTaskName(ev.target.value)}
                placeholder="Add new task..." />
        </form>
    )
}

export default ToDoForm;