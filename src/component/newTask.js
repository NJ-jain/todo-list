import { Bell, Calendar, Plus, Repeat, Square, SquareCheckBig, Star, StarOff, Trash2, X } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggle, toggleTaskCompletion, toggleTaskImpportant } from '../store/slice/taskSlice';

const TaskSlider = () => {
  const isOpen = useSelector((state) => state.task.isOpen);
  const task = useSelector((state) => state.task.taskList[state.task.taskId]);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleToggleTaskCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId)); // Dispatch the action to toggle task completion
  };
  const handleToggleTaskImportant = (taskId) => {
    dispatch(toggleTaskImpportant(taskId)); // Dispatch the action to toggle task completion
  };
  const handleTaskDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch the action to toggle task completion
    dispatch(toggle())
  };
  const handleClose =() => {
    dispatch(toggle())
  }

  return (
    <div className='w-1/5 bg-[#EEF6EF] flex flex-col p-4 h-screen  '>
      <div className='flex flex-col' key={task.id} >

        <div className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <div className='flex gap-2'>
            <span className='taskCheckBox' onClick={() => handleToggleTaskCompletion(task.id)}> 
              {task.completed ? <SquareCheckBig /> : <Square />}
            </span>
            <span className="task-text">{task.text}</span>
          </div>

          <span className='taskCheckBox' onClick={() => handleToggleTaskImportant(task.id)}> 
            {task.important ? <Star /> : <StarOff />}
          </span>
          {/* <span className="task-priority">{task.priority}</span> */}
        </div>
        <div  className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <div className='flex gap-2'>
            <span className='taskCheckBox'> 
              <Plus />
            </span>
            <span className="task-text">Add Step</span>
          </div>

        </div>
        <div  className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <div className='flex gap-2'>
            <span className='taskCheckBox'> 
              <Bell />
            </span>
            <span className="task-text">Set Reminder</span>
          </div>

        </div>
        <div  className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <div className='flex gap-2'>
            <span className='taskCheckBox'> 
              <Calendar />
            </span>
            <span className="task-text">Add Due Date</span>
          </div>

        </div>
        <div  className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <div className='flex gap-2'>
            <span className='taskCheckBox'> 
              <Repeat />
            </span>
            <span className="task-text">Add Due Date</span>
          </div>

        </div>
      </div>
      <div className='mt-auto'>

        <div className="task-item flex justify-between items-center p-5 border-t border-b border-[#496E4B33]" >
          <span className='taskCheckBox' onClick={handleClose}> 
            <X />
          </span>
          <span className="task-text">Created Today</span>
          <span className='taskCheckBox' onClick={() => handleTaskDelete(task.id)}> 
            <Trash2 />
          </span>
        </div>

      </div>
    </div>
  );
};


export default TaskSlider