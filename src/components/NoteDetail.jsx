import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import DetailAction from './DetailAction';

function NoteDetail({
  note,
  archiveHandler,
  unarchiveHandler,
  deleteHandler,
  editHandler,
}) {
  const { id, title, createdAt, body, archived } = note;
  return (
    <>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
      <div
        className='detail-page__body'
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
      <DetailAction
        key={id}
        id={id}
        archived={archived}
        archiveHandler={archiveHandler}
        unarchiveHandler={unarchiveHandler}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
  archiveHandler: PropTypes.func.isRequired,
  unarchiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default NoteDetail;
