import React from 'react';
import { RxPlus } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function HomepageAction() {
  const navigate = useNavigate();

  return (
    <div className='homepage__action'>
      <button
        className='action'
        type='button'
        title='Tambah'
        onClick={() => navigate('/notes/new')}
      >
        <RxPlus />
      </button>
    </div>
  );
}

export default HomepageAction;
