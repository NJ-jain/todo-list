import React from 'react';
import { useSelector } from 'react-redux';

const NewTask = () => {
  const isOpen = useSelector((state) => state.task.isOpen);

  if (!isOpen) return null;

  return (
    <div className='w-1/5 bg-red-300'>NewTask</div>
  );
};


export default NewTask