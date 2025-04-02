import { useState } from "react";
import SearchBar from "./SearchBar";
import TaskComponent from "./TaskComponent";
function Tasks({tasks,setTasks}) {
    const [content,setContent] = useState("");
    return (
        <>
            <SearchBar content={content} setContent={setContent} />
            {tasks.length == 0 ? <h3>All Tasks Done. Cheers!!!</h3> : <TaskComponent tasks = {tasks} content={content} setTasks={setTasks}/>}
        </>
    )
}

export default Tasks