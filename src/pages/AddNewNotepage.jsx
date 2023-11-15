import React from 'react';
import { addNote } from '../utils/local-data';
import AddNewInput from '../components/AddNewInput';

function AddNewNotePage() {
  function onAddNote(note) {
    addNote(note);
  }

  return (
    <section className='add-new-page'>
      <AddNewInput addNote={onAddNote} />
    </section>
  );
}

export default AddNewNotePage;
