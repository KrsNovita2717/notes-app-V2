import React, { useState, useEffect } from 'react';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getNote(id);
        if (error) {
          console.error('Error fetching note details');
        } else {
          setNote(data);
        }
      } catch (error) {
        console.error('Unexpected error during note fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onDeleteHandler = async () => {
    try {
      await deleteNote(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const onArchiveHandler = async () => {
    try {
      await archiveNote(id);
      navigate('/');
    } catch (error) {
      console.error('Error archiving note:', error);
    }
  };

  const onUnarchiveHandler = async () => {
    try {
      await unarchiveNote(id);
      navigate('/');
    } catch (error) {
      console.error('Error unarchiving note:', error);
    }
  };

  const onEditHandler = () => {
    navigate(`/notes/edit/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
