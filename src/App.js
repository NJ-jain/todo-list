import { useSelector } from 'react-redux';
import './App.css';
import Aside from './component/aside';
import Navbar from './component/navbar';
import NewTask from './component/newTask';
import TaskList from './component/taskList';

function App() {

  const showNewTask = useSelector((state) => state.task.isOpen);
  const showAside = useSelector((state) => state.aside.isOpen); // Get the isOpen state from Redux


  return (
    <div className="App flex flex-col h-screen px-4">
      <Navbar />
      <div className={`flex w-full ${showNewTask && showAside ? "gap-4" : showNewTask || showAside ? "gap-8" : ""} `}>
        <Aside />
        <TaskList />
        <NewTask />
      </div>
    </div>
  );
}

export default App;
