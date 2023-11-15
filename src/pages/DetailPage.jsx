import React from 'react';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = () => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchiveHandler = () => {
    unarchiveNote(id);
    navigate('/');
  };

  const onEditHandler = () => {
    navigate(`/notes/edit/${id}`);
  };

  return (
    <section className='detail-page'>
      <NoteDetail
        note={note}
        deleteHandler={onDeleteHandler}
        archiveHandler={onArchiveHandler}
        unarchiveHandler={onUnarchiveHandler}
        editHandler={onEditHandler}
      />
    </section>
  );
}

export default DetailPage;
