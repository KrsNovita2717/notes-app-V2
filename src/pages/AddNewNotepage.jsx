import React from 'react';
import { addNote } from '../utils/api';
import AddNewInput from '../components/AddNewInput';
import { useNavigate } from 'react-router-dom';

function AddNewNotePage() {
  const navigate = useNavigate();

  async function onAddNote(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section className='add-new-page'>
      <AddNewInput addNote={onAddNote} />
    </section>
  );
}

export default AddNewNotePage;
