import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  //Setea en el estado lo que escribimos en el input
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //la accion del formulario 
  const onSummit = (event) => {
    const newValue = inputValue.trim()
    event.preventDefault();
    if (newValue.length <= 1) return;
    // if (categories.findIndex(newValue => newValue < 0)) return;
    onNewCategory( newValue );
    setInputValue('');
  };

  return (
    <form onSubmit={ onSummit }>
      <input
        type='text'
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={onInputChange}
      ></input>
      <button
        onClick={onSummit}
        className='pointer my-2 rounded-md border border-purple-800 py-2 px-4 hover:bg-purple-800 hover:text-white active:bg-violet-900'
      >
        Agregar
      </button>
    </form>
  );
};

export default AddCategory;
