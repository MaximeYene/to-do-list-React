import './App.css';
import Formulaire from './components/Formulaire.js';
import List from './components/List';
import { useState } from 'react';
import React from 'react';


function App() {
  const [entries,setEntries]=useState([])
   
  const handleEntriesAdd=(newEntry)=>{
      setEntries((previewEntries)=>[...previewEntries,newEntry]);
 }
  return(<div>
    <Formulaire onEntryAdd={handleEntriesAdd} />
    <List entries={entries} />
  </div>)
}

export default App;
