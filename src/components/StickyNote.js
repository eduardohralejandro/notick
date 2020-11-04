import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import increment from '../actions'
import stickyNoteDescription from '../actions'


const StickyNote = () => {
  const [ noteValue, setNoteValue ] = useState("");

  const dispatch = useDispatch();
  const item = useSelector(state => state.addItem);
  
  const onChange = (e) => setNoteValue(e.target.value);
  
  const addItemValue = () => {
    dispatch(stickyNoteDescription(noteValue));
  }
  
  return (
    <div>
      <input  onChange={(e) => onChange(e)}/>
      <button onClick={() => addItemValue()}>add item</button>
    </div>
  );
}


export default StickyNote;