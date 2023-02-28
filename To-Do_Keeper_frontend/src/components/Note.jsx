import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Draggable, {DraggableCore} from 'react-draggable';
// import { Draggable } from "react-drag-reorder";

function Note(props) {
  const [complete, setComplete] = useState(false);
  function handleClick() {
    //   useEffect(() => {
    //     // DELETE request using fetch with async/await

    //     async function deletePost() {

    //         await fetch(`https://localhost:3000/delete/${props.id}`, { method: 'DELETE' });
    //         // setStatus('Delete successful');
    //     }

    //     deletePost();
    // }, []);

    fetch(`https://to-do-keeper.onrender.com/delete/${props.id}`, {
      method: "delete"
    }).then((response) => {

      props.onDelete();
      return response.json();
    })
      .catch(err => console.log(err));
    
  }

  const checkHandler = () => {
    // console.log("fired");
    setComplete(!complete);
  };

  return (
    <Draggable>
    <div className="note">
    
      <div>
        <h1 style={{textDecoration:complete===true?'line-through':'none'}}>{props.title}</h1>
        <p>{props.date}</p>
      </div>
      <div>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={complete}
          onChange={checkHandler}
          style={{margin:"5px"}}
        />
        <label for="scales">Completed</label>
      </div>

      <button onClick={handleClick}>DELETE</button>
      
    </div>
    </Draggable>
  );
}

export default Note;
