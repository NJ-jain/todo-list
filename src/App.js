import { useSelector } from 'react-redux';
import './App.css';
import Aside from './component/aside';
import Navbar from './component/navbar';
import NewTask from './component/newTask';
import TaskList from './component/taskList';
import { useEffect } from 'react';

function App() {

  const showNewTask = useSelector((state) => state.task.isOpen);
  const showAside = useSelector((state) => state.aside.isOpen); // Get the isOpen state from Redux


  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App flex flex-col h-screen px-4 dark:bg-[#242424]">
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
