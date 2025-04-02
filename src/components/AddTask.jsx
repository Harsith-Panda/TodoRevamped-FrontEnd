import { useState } from "react"
import AddTaskForm from "./AddTaskForm";

function AddTask(props) {
    const [isClicked,setIsClicked] = useState(false);
    return (
        <>
            {isClicked && <AddTaskForm tasks = {props.tasks} setTasks = {props.setTasks}/>}
            <button onClick={() => setIsClicked(true)}>+</button>
        </>
    )
}

export default AddTask