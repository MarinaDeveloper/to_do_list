import React, { useState } from 'react';
import './App.css';
import ToDoItem from './toDo/ToDoItem';

const App = () => {
  let arr = [];

  function CreateNote(status, note) {
    this.status = status;
    this.note = note;
  }

  const createArr = () => {
    for (let i = 0; i < 7; i++) {
      arr.push(new CreateNote(false, ''));
    }
    localStorage.setItem('notes', JSON.stringify(arr));
    return arr
  }

  localStorage.length > 0 ? arr = JSON.parse(localStorage.getItem('notes')) : createArr();  

  const [numberOfLines, setNumberOfLines] = useState(arr);

  const deleteLine = () => {
    setNumberOfLines((arr) => (arr.slice(0, -1)));
    localStorage.setItem('notes', JSON.stringify(arr.slice(0, -1)));
  }

  const addLine = () => {
    setNumberOfLines(arr => [...arr, new CreateNote(false, '')])
    localStorage.setItem('notes', JSON.stringify([...arr, new CreateNote(false, '')]));
  }

  const todosItem = numberOfLines.map((item, index, array) => 
    <ToDoItem
      key={index}
      index={index}
      arrNote={array}
    />
  )

  return (
    <div className="App">
      <h1 className='title'>to do list</h1>
      {todosItem}
      <div className='block-btns'>
        <button onClick={deleteLine} className="btn">Delete a line</button>
        <button onClick={addLine} className="btn">Add a line</button>
      </div>
    </div>
  )
}

export default App;