import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  const [noExpand,setExpand] = useState(false);

  function expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {noExpand && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Titulo"
        />)}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Escribe una nota..."
          rows={noExpand ? 3 : 1}
        />
        <Zoom in={noExpand}>
        <Fab  onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
