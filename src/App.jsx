import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import SearchBar from './components/SearchBar';

function App() {
  const [tasks,setTasks] = useState([]);
  return (
    <div>
      <Header />
      {/* <SearchBar tasks={tasks} setTasks={setTasks} /> */}
      <Tasks tasks={tasks} setTasks={setTasks}/>
      <AddTask tasks={tasks} setTasks = {setTasks}/>
    </div>
  )
}

export default App
