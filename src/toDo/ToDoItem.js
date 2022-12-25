import React, { useEffect, useState } from "react";
import './toDoItem.css';
import close from './close.png';

const ToDoItem = ({index, arrNote}) => {

    const [completed, setCompleted] = useState(arrNote[index].status);
    const [description, setDescription] = useState(arrNote[index].note);

    const getValueDescription = (e) => {
        setDescription(e.target.value);
    }

    const clearTheLine = () => {
        setCompleted(false);
        setDescription('');
    }
    
    useEffect(() => {
        arrNote[index].status = completed;
        arrNote[index].note = description;

        localStorage.setItem('notes', JSON.stringify(arrNote));
    }, [completed, description, arrNote, index])

    return (
        <div className="todo-item">
            <input type="checkbox" className="checkbox" checked={completed} onChange={() => setCompleted(!completed)}/>
            <textarea className={`description ${completed && 'done'}`} value={description} onChange={getValueDescription} placeholder="Type your note"/>
            <button  className="close" onClick={clearTheLine}>
                <img src={close} alt={close}/>
            </button>
        </div>
    )
}

export default ToDoItem;