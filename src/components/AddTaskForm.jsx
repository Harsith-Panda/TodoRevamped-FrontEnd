import { useState } from "react"

function AddTaskForm(props) {
    const [value,setValue] = useState("");
    function add(e) {
        e.preventDefault();
        let id = props.tasks.length;
        props.setTasks([...props.tasks,{id:id+1,task:value,isCompleted:false}]);
        setValue("");
    }
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={add}>+ Add Task</button>
        </div>
    )
}

export default AddTaskForm