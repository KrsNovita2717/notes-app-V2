import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
  const isEmpty = notes.length === 0;
  return (
    <section className={`notes-list${isEmpty ? '-empty' : ''}`}>
      {isEmpty ? (
        <p className='note-list__empty'>Tidak ada catatan</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      )}
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
