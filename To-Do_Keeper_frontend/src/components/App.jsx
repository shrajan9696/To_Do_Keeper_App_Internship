import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Filter from "./Filter"
import ExpensesChart from './ExpensesChart';



function App() {
  const [notes, setNotes] = useState([]);
  const[filteredYear,setFilteredYear] = useState('2023');

  const fetchData = async () => {
    const response = await fetch("https://to-do-keeper.onrender.com/getData");
    const data = await response.json();
    // console.log(data);
    return setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function addNote(newNote) {
    console.log("fired");
    // setNotes(prevNotes => {
    //   return [...prevNotes, newNote];
    // });
    // setTimeout(function(){
      fetchData();
    // },1000)
    // window.location.reload(false);
    
  }

  function deleteNote(id) {
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
    // setTimeout(function(){
      fetchData();
    // },500)
    // window.location.reload(false);
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterednotes =notes.filter(function (expense) {
    const x = (expense.item_date);
    const myArray = x.split(" ");

    // console.log(myArray);
     return myArray[2]===filteredYear;
  })

  
  const getChangedPos = (currentPos, newPos) => {
    console.log(currentPos, newPos);
  };

  return (
    <div>
      <Header />
      <ExpensesChart data = {filterednotes}/>
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} data={filterednotes}></Filter>
      <CreateArea onAdd={addNote} />
      <div>
     
      {filterednotes.reverse().map((noteItem, index) => {
        return (
        
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.item_name}
            date={noteItem.item_date}
            onDelete={deleteNote}
          />
           
          
        );
      })}
     
     
      
      </div>
      <Footer />
    </div>
  );
}

export default App;

// https://magical-granita-094513.netlify.app/