import { useState, useEffect } from "react";

const EditModal = ({ isOpen, onCancel, editNote, note }) => {
    const [editedText, setEditedText] = useState('');

    useEffect(() => {
        if (note) {
            setEditedText(note.note_text);
        }
    }, [note]);

    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === "Escape") onCancel();
        if (e.key === "Enter") handleApply();
    };

    const handleApply = () => {
        if (!note?.id) {
            console.error("No note ID found!");
            return;
        }
        editNote({
            ...note,
            note_text: editedText
        });
    };

    return (
        <div className="edit-modal-container">
            <div className="edit-modal">
                <h1 className="edit-modal-title">Edit Note</h1>
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
                <div className="edit-modal-buttons">
                    <button onClick={onCancel} className="edit-modal-cancel">Cancel</button>
                    <button onClick={handleApply} className="edit-modal-apply">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
