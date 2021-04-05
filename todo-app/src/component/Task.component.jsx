const Task = (props) => {
    return (
        <p key={props.taskIndex} className="outputtext">
            {props.taskValue}
            <button onClick={() => props.onRemoveTask(props.taskValue)}>Complete</button>
        </p>)
}

export default Task;