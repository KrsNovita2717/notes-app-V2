import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editNote, getNote } from '../utils/local-data';

function EditNote() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: note.id,
    body: note.body,
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

  const onEditHandler = () => {
    const { id, title, body } = state;
    editNote({ id, title, body });
    navigate('/');
  };

  return (
    <>
      <div className='edit-page__input'>
        <input
          className='edit-page__input__title'
          type='text'
          placeholder='Judul catatan'
          value={state.title}
          onChange={onTitleChangeEventHandler}
        />
        <p className='edit-page__input__title__char-limit'>
          Sisa Karakter: {state.charLimit - state.title.length}
        </p>
        <div
          className='edit-page__input__body'
          contentEditable='true'
          data-placeholder='Mau nulis...'
          value={state.body}
        ></div>
      </div>
      <div className='edit-page__action'>
        <button
          className='action'
          type='button'
          title='Simpan'
          onClick={() => onEditHandler()}
        >
          <FaCheck />
        </button>
      </div>
    </>
  );
}

export default EditNote;
