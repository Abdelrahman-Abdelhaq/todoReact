const NewNoteButton = ({openModal})=>{

    return(
         <button className="note-button" id="new-note" onClick={openModal} ></button>
    );
}

export default NewNoteButton;