import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editNote, getNote } from '../utils/local-data';
import { FaCheck } from 'react-icons/fa';

function EditPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();
  const [state, setState] = useState({
    id,
    title: note.title,
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

  const onBodyChangeEventHandler = (event) => {
    const bodyContent = event.target.innerHTML;
    setState((prevState) => ({
      ...prevState,
      body: bodyContent,
    }));
  };

  const onEditHandler = () => {
    const { id, title, body } = state;
    const editedTitle = title.trim() === '' ? '-' : title;
    const editedBody = body.trim() === '' ? '-' : body;
    editNote({ id, title: editedTitle, body: editedBody });
    navigate(`/notes/${id}`);
  };

  return (
    <>
      <div className='edit-page__input'>
        <input
          className='edit-page__input__title'
          type='text'
          value={state.title}
          onChange={onTitleChangeEventHandler}
        />
        <p className='edit-page__input__title__char-limit'>
          Sisa Karakter: {state.charLimit - state.title.length}
        </p>
        <div
          className='edit-page__input__body'
          contentEditable='true'
          dangerouslySetInnerHTML={{ __html: state.body }}
          onBlur={onBodyChangeEventHandler}
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

export default EditPage;
