import React, { useState } from 'react';
import './select-box.scss';

function SelectBox({ options, showSearchBox }) {
  const [state, setState] = useState({
    isOptionListVisible: false,
    selectedOption: options[0]
  });

  const { isOptionListVisible, selectedOption } = state;

  const toggleOptionList = () => {
    setState({ ...state, isOptionListVisible: !isOptionListVisible });
  };

  const selectOption = (e, value) => {
    e.target.className += ' selected';
    setState({
      ...state,
      isOptionListVisible: !isOptionListVisible,
      selectedOption: value
    });
  };

  const option_list = [];
  options.forEach((value, index) => {
    option_list.push(
      <li
        key={index}
        className={`option ${selectedOption === value && 'selected'}`}
        value={value}
        onClick={e => selectOption(e, value)}
      >
        {value}
      </li>
    );
  });

  return (
    <div className='select-box-container'>
      <div className='select-box' onClick={() => toggleOptionList()}>
        <p>{selectedOption.length > 0 ? selectedOption : 'Select Item'}</p>
        <span className='material-icons'>
          {isOptionListVisible ? 'arrow_drop_up' : 'arrow_drop_down'}
        </span>
      </div>

      {isOptionListVisible && <ul className='option-list'>{option_list}</ul>}
      {/* {isOptionListVisible && (
        <ul className='option-list'>
          {options.map((value, index) => (
            <li
              key={index}
              className={`option ${selectedOption === value && 'selected'}`}
              value={value}
              onClick={e => selectOption(e, value)}
            >
              {value}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default SelectBox;
