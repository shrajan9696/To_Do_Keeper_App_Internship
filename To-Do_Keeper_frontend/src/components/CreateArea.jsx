import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    item_name: "",
    item_date: new Date()
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      const curr_date = new Date();
      return {
        ...prevNote,
        [name]: value,
        item_date: curr_date
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    
    // setNote({
    //   item_name: "",
    //   item_date: ""
    // });
    let databody = {
      item_name: note.item_name,
      item_date: note.item_date
    };

    fetch("https://to-do-keeper.onrender.com/postData", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        props.onAdd(note);
        // return data;
       
      })
      .catch((err) => {
        console.log(err);
      });
    // event.preventDefault();
    
    setNote({
      item_name: "",
      item_date: ""
    });


  
  }

  return (
    <div>
      <form>
        <input
          name="item_name"
          onChange={handleChange}
          value={note.item_name}
          placeholder="Your To Do"
        />
        {/* <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
