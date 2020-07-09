import React, { useState } from 'react';

function Dropdown ({ title, items, multiselect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    // if we dont have the item already (unique item)
    if (!selection.some(current => current.id === item.id)) {
      // go ahead and add that item
      if (!multiselect) {
        setSelection([item])
      } else if (multiselect) {
        // spread the current selection (which has items inside) and add the new item
        setSelection([...selection, item])
      }
    } else {
      // remove the item if isnt unique
      // the user knows that he has the item in the selection
      // and he clicks to remove it from the selection (using filter)
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id != item.id
      );
      setSelection([...selectionAfterRemoval]); //new array
    }
  }

  function isItemInSelection(item) {
    if (selection.find(current => current.id === item.id)) {
      return true;
    }
    return false;
  }



  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}>
          <div className="dd-header_title">
            <p className="dd-header_title--bold">{title}</p>
          </div>
          <div className="dd-header_action">
            <p>{open ? 'Close' : 'Open'}</p>
          </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown