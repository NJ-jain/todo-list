import { Bell, Calendar, CircleChevronDown, CircleChevronUp, Repeat, Square, SquareCheckBig, Star, StarOff } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, taskInputBox, toggleTaskCompletion, toggleTaskImpportant,setSelectedTaskId } from '../store/slice/taskSlice';

const TaskList = () => {

    const showTaskSlider = useSelector((state) => state.task.isOpen);
    const showAside = useSelector((state) => state.aside.isOpen); // Get the isOpen state from Redux
    const [TaskSliderText, setTaskSliderText] = React.useState('');
    const tasks = useSelector((state) => state.task.taskList);
    const taskInput = useSelector((state) => state.task.isTaskInputBoxOpen);
    console.log(taskInput);
    const handleAddTask = () => {
        if (TaskSliderText.trim() !== '') {
            dispatch(addTask({ text: TaskSliderText, priority: 'Normal' })); // Assuming default priority is 'Normal'
            setTaskSliderText(''); // Clear the textarea after adding the task
        }
    };

    const handleToggleTaskCompletion = (taskId) => {
        dispatch(toggleTaskCompletion(taskId)); // Dispatch the action to toggle task completion
    };
    const handleToggleTaskImportant = (taskId) => {
        dispatch(toggleTaskImpportant(taskId)); // Dispatch the action to toggle task completion
    };
    const handleTaskInputBox = () => {
        dispatch(taskInputBox());
    }
    const handleSelectedTaskId = (taskId) => {
        dispatch(setSelectedTaskId(taskId)); // Dispatch the action to toggle task completion
       dispatch(toggle())
    };

    const dispatch = useDispatch();
    return (
        <div className={`${showTaskSlider && showAside ? "w-3/5" : showTaskSlider || showAside ? "w-4/5" : "w-full"} flex flex-col gap-4 `}>

            <div className="flex items-center gap-1 dark:text-white" onClick={handleTaskInputBox} > {/* Add a flex container for alignment */}
                <span className='text-[#142E159E] dark:text-white' >To Do</span> {/* Wrap the text in a span for potential styling */}
               {taskInput ? <CircleChevronDown  className='dark:text-white text-[#142E159E]' />:<CircleChevronUp   className='dark:text-white text-[#142E159E]'/>}
            </div>


            {taskInput && <div className='w-full bg-gradient-to-b from-[rgba(53,121,55,0.1)] to-[rgba(208,255,210,0.1)] h-64 flex flex-col justify-between'>
                <textarea
                    className='w-full bg-transparent text-[#142E159E] outline-none p-2'
                    rows={9}
                    value={TaskSliderText}
                    onChange={(e) => setTaskSliderText(e.target.value)}
                    placeholder='Add a Task'
                />

                <div className='flex justify-between p-3 mt-auto'>
                    <div className='flex gap-4'>
                        <Bell color='#142E159E' />
                        <Repeat color='#142E159E' />
                        <Calendar color='#142E159E' />
                    </div>
                    {/* <button className='bg-[#35793729] text-[#357937] p-2 rounded-md' onClick={() => dispatch(toggle())}>ADD TASK</button> */}
                    <button className='bg-[#35793729] text-[#357937] p-2 rounded-md' onClick={handleAddTask}>ADD TASK</button>
                </div>
            </div>}

            <ul className="task-list">
                {Object.values(tasks).filter(task => !task.completed).map((task) => (
                    <li key={task.id} className="task-item flex justify-between items-center p-5 border border-[#496E4B33]" onClick={() => handleSelectedTaskId(task.id)}>
                        <div className='flex gap-2'>
                            <span className='taskCheckBox' onClick={() => handleToggleTaskCompletion(task.id)}> {/* Add onClick handler */}
                                {task.completed ? <SquareCheckBig /> : <Square />}
                            </span>
                            <span className="task-text">{task.text}</span>
                        </div>

                        <span className='taskCheckBox' onClick={() => handleToggleTaskImportant(task.id)}> {/* Add onClick handler */}
                            {task.important ? <Star /> : <StarOff />}
                        </span>
                        {/* <span className="task-priority">{task.priority}</span> */}
                    </li>
                ))}
            </ul>
            <p className='w-fit'>Completed</p>
            <ul className="task-list">
                {Object.values(tasks).filter(task => task.completed).map((task) => (
                    <li key={task.id} className="task-item flex justify-between items-center p-5 border border-[#496E4B33]" onClick={() => handleSelectedTaskId(task.id)}>
                        <div className='flex gap-2'>
                            <span className='taskCheckBox' onClick={() => handleToggleTaskCompletion(task.id)}> {/* Add onClick handler */}
                                {task.completed ? <SquareCheckBig /> : <Square />}
                            </span>
                            <span className="task-text">{task.text}</span>
                        </div>

                        <span className='taskCheckBox' onClick={() => handleToggleTaskImportant(task.id)}> {/* Add onClick handler */}
                            {task.important ? <Star /> : <StarOff />}
                        </span>
                        {/* <span className="task-priority">{task.priority}</span> */}
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default TaskList