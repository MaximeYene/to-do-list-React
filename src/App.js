import './App.css';
import Formulaire from './components/Formulaire.js';
import List from './components/List';
import { useState } from 'react';
import React from 'react';


function App() {
  const [entries,setEntries]=useState([])
  const [edit,setEdit]=useState(null)
   
  const handleEntriesAdd=(newEntry)=>{
      setEntries((previewEntries)=>[...previewEntries,newEntry]);
 }

 const handleDeleteEntry=(index)=>{
  setEntries((previewEntries)=>previewEntries.filter((entry,i)=> i !==index))
 }

 const handleEditEntry=(index)=>{
  setEdit(index)
 }

 const handleEntryUpdate=(updateEntry)=>{
  const updateEntries=[...entries];
  updateEntries[edit]=updateEntry;
  setEntries(updateEntries);
  setEdit(null)
 }
  return(<div className='container'>
    <Formulaire onEntryAdd={handleEntriesAdd} />
    {edit !== null ?(<Formulaire entries={entries[edit]} onEntryUpdate={handleEntryUpdate}/>):(<List entries={entries} onEditEntry={handleEditEntry} onDeleteEntry={handleDeleteEntry} />)}
  </div>)
}

export default App;
