import React, { useState } from 'react';
import './App.css';
import Task from './component/Task.component';
import TaskForm from './component/TaskForm.component';

const App = () => {
  const [task, setTask] = useState();
  const [tasklist, setTaskList] = useState([]);
  const onChangeHandler = (e) => {
    setTask(e.target.value)
  }
  const onClickHandler = () => {
    setTaskList([...tasklist, task])
    setTask("");
  }
  const removeTask = (taskValue) => {
    let updatedTasks = [];
    updatedTasks = tasklist.filter((value, index) => {
      return value != taskValue;
    })
    setTaskList(updatedTasks);
  }
  const showNotice = <div><h1 className="heading">Todo List</h1><p className="count">There are {tasklist.length} todos.</p></div>
  // styling css here

  // const formArea = {
  //   backgroundColor: 'gray',
  //   height: 600,
  //   width: '100%',
  //   padding: 20,
  // };

  return (
    <div >
      <TaskForm inputValue={task} formChangeHandler={onChangeHandler} formClickHandler={onClickHandler} />
      { tasklist.length > 0 ? showNotice : ''}
      <div className="tasklist">
        {
          tasklist.map((value, index) => {
            return <Task taskValue={value} taskIndex={index} onRemoveTask={removeTask} />
          })
        }
      </div>
    </div>

  );
}
export default App;