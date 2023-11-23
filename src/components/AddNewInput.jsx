import React from 'react';
import PropTypes from 'prop-types';
import AddNewAction from './AddNewAction';

class AddNewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onInputBodyEventHandler = this.onInputBodyEventHandler.bind(this);
    this.onSaveHandler = this.onSaveHandler.bind(this);
  }

  onChangeTitleEventHandler(event) {
    const inputText = event.target.value;
    const remainingChars = this.state.charLimit - inputText.length;

    if (remainingChars >= 0) {
      this.setState(() => {
        return {
          title: inputText,
        };
      });
    }
  }

  onInputBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSaveHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          type='text'
          placeholder='Judul catatan'
          value={this.state.title}
          onChange={this.onChangeTitleEventHandler}
        />
        <p className='add-new-page__input__title__char-limit'>
          Sisa Karakter: {this.state.charLimit - this.state.title.length}
        </p>
        <div
          className='add-new-page__input__body'
          data-placeholder='Mau nulis...'
          contentEditable
          onInput={this.onInputBodyEventHandler}
        ></div>
      </div>
      <AddNewAction saveHandler={this.onSaveHandler}/>
      </>
    );
  }
}

AddNewInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNewInput;
