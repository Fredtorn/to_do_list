import ToDoForm from './ToDoForm'
import Task from './components/Task/Task';
import { useEffect, useState } from 'react';
import flower from '../../assets/flower.png';


const ToDoPage = ({ initialState = [] }) => {

    const [tasks, setTasks] = useState(initialState);
    useEffect(() => {
        if (tasks.length === 0) return;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        setTasks(tasks);
    }, []);

    const addTask = (name) => {
        setTasks(prev => [...prev, { name: name, done: false }]
        )
    }

    function removeTask(indexToRemove) {
        setTasks(prev => {
            return prev.filter((taskObjekt, index) => index !== indexToRemove);
        })
    }

    const updateTaskDone = (taskIndex, newDone) => {
        setTasks(prev => {
            const newTask = [...prev];
            newTask[taskIndex].done = newDone;
            return newTask;
        })
    }
    const numberComplete = tasks.filter(t => t.done).length;
    const numberTotal = tasks.length;


    function getMessage() {
        const percentage = numberComplete / numberTotal * 100;
        if (percentage === 0) {
            return 'Try to add at least one! '
        }
        if (percentage === 100) {
            return 'All done! Great job!';
        }
        return 'You got this!';

    }

    function getFlower() {
        const showFlowerWhenAllDone = numberComplete / numberTotal * 100;
        if (showFlowerWhenAllDone === 100) {
            return <img src={flower} alt="metal flower" />
        } else {
            return undefined
        }

    }

    function renameTask(index, newName) {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[index].name = newName;
            return newTasks;
        })
    }

    return (
        <main>
            <div className='flower'>
                {getFlower()}
                {getFlower()}
            </div>
            <h1 className='toDoText'>YOUR TO DO'S:</h1>
            <div className='toDoContainer'>
                <div className='countText'>
                    <h2>{getMessage()}</h2>
                    <h3>{numberComplete}/{numberTotal} Complete</h3>
                </div>
                <ToDoForm onAdd={addTask} />
                {tasks.map((task, index) => (
                    <Task {...task}
                        onRename={newName => renameTask(index, newName)}
                        onTrash={() => removeTask(index)}
                        onToggle={done => updateTaskDone(index, done)} />
                ))}
            </div>
        </main>
    );
}

export default ToDoPage;