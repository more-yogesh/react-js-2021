import Button from './Button.component';

const TaskForm = (props) => {

    return (
        <div className="taskform">
            <input type="text" onChange={props.formChangeHandler} value={props.inputValue} className="inputtext" placeholder="Enter new todo" />
            <Button onClick={props.formClickHandler} />
        </div>
    );
}

export default TaskForm;