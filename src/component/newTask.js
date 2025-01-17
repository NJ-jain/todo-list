import React from 'react';
import { useSelector } from 'react-redux';

const TaskSlider = () => {
  const isOpen = useSelector((state) => state.task.isOpen);

  if (!isOpen) return null;

  return (
    <div className='w-1/5 bg-[#EEF6EF]'>
      
    </div>
  );
};


export default TaskSlider