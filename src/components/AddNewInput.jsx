import React, { useState } from 'react';
import AddNewAction from './AddNewAction';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddNewInput() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: '',
    body: '',
    charLimit: 50,
  });

  const onTitleChangeEventHandler = (event) => {
    const inputText = event.target.value;
    const remainingChars = state.charLimit - inputText.length;

    if (remainingChars >= 0) {
      setState((prevState) => ({
        ...prevState,
        title: inputText,
      }));
    }
  };

  const onSaveHandler = () => {
    const { title, body } = state;
    addNote({ title, body });
    navigate('/');
  };

  return (
    <>
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          type='text'
          placeholder='Judul catatan'
          value={state.title}
          onChange={onTitleChangeEventHandler}
        />
        <p className='add-new-page__input__title__char-limit'>
          Sisa Karakter: {state.charLimit - state.title.length}
        </p>
        <div
          className='add-new-page__input__body'
          contentEditable='true'
          data-placeholder='Mau nulis...'
          value={state.body}
        ></div>
      </div>
      <AddNewAction saveHandler={onSaveHandler} />
    </>
  );
}

export default AddNewInput;
