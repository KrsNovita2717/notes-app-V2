import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

function AddNewAction({ saveHandler }) {
  return (
    <div className='add-new-page__action'>
      <button
        className='action'
        type='button'
        title='Simpan'
        onClick={(event) => saveHandler(event)}
      >
        <FaCheck />
      </button>
    </div>
  );
}

AddNewAction.propTypes = {
  saveHandler: PropTypes.func.isRequired,
};

export default AddNewAction;
