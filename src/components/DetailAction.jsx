import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload, FaTrash, FaUpload, FaEdit } from 'react-icons/fa';

function DetailAction({
  id,
  archived,
  archiveHandler,
  unarchiveHandler,
  deleteHandler,
  editHandler,
}) {
  const archiveTitleButton = archived ? 'Aktifkan' : 'Arsipkan';
  const archiveIconButton = archived ? FaUpload : FaDownload;
  const archiveHandlerButton = archived
    ? () => unarchiveHandler(id)
    : () => archiveHandler(id);

  return (
    <div className='detail-page__action'>
      <button
        className='action'
        type='button'
        title='Edit'
        onClick={() => editHandler()}
      >
        <FaEdit />
      </button>
      <button
        className='action'
        type='button'
        title={archiveTitleButton}
        onClick={archiveHandlerButton}
      >
        {archiveIconButton()}
      </button>
      <button
        className='action'
        type='button'
        title='Hapus'
        onClick={() => deleteHandler(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

DetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveHandler: PropTypes.func.isRequired,
  unarchiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};

export default DetailAction;
