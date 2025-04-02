function TaskComponent({tasks,content,setTasks}) {
  let currentTasks = tasks.filter(item => content.toLowerCase() == "" ? item : item.task.toLowerCase().includes(content.toLowerCase()));
  function changeState(id) {
    setTasks(tasks.map((item) => (item.id == id) ? {...item,isCompleted: !item.isCompleted} : item))
  }
  function deleteTask(id) {
    setTasks(tasks.filter((val) => val.id != id));
  }
  currentTasks.sort((a,b) => Number(a.isCompleted) - Number(b.isCompleted));
  return (
    <>
      {(currentTasks.length == 0) ? <h4>No Tasks Named "{content}".</h4> : currentTasks.map((value) => (!value.isCompleted) ? <div><h3 key = {value.id} onClick={() => changeState(value.id)}>{value.task}</h3> <button onClick={() => deleteTask(value.id)}>Delete X</button> </div>: <div><h3 key = {value.id} style={{textDecoration:"line-through"}} onClick={() => changeState(value.id)}>{value.task}</h3><button onClick={() => deleteTask(value.id)}>Delete X</button></div>)}
    </>
  )
}

export default TaskComponent