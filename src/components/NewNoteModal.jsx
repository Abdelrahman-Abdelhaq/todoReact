import { useRef, useState } from "react";

const NewNoteModal = ({isOpen, closeModal, addNote, noteText, setnewNoteText}) => {
  if (!isOpen) return null;

const handleKeyDown = (e) => {
  if (e.key === 'Enter') addNote();
  if (e.key === 'Escape') closeModal();
};


  return (
    <div className="modal-container" id="modal-container">
      <div className="modal">
        <h1 className="modal-title">NEW NOTE</h1>
        <input
          type="text"
          placeholder="Input your note..."
          id="note"
          value={noteText}
          onChange={setnewNoteText}
          onKeyDown={handleKeyDown} 
          autoFocus 
        />
        <div className="modal-buttons">
          <button className="modal-cancel" onClick={closeModal}>Cancel</button>
          <button className="modal-apply" onClick={addNote}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal;