import { useState } from "react";
import React from "react";
import '../styles/Input.css'


function Formulaire(props) {

    const [work, setWorkValue] = useState("");
    const [description, setDescriptionValue] = useState("")
    const [date, setDateValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry={
            work: work,
            description: description,
            date: date
        }
        props.onEntryAdd(newEntry);
        setWorkValue('');
        setDescriptionValue('');
        setDateValue('');
    }

    const handleWorkChange = (e) => {
        setWorkValue(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value)
    }
    const handleDateChange = (e) => {
        setDateValue(e.target.value)
    }

    return (
        <div>
            <h1 className="title">To-Do List</h1>
                <div className="container-form">
                    <h2>To-Do App!</h2>
                    <h4>Add new To-Do</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="work" value={work} placeholder="Work" onChange={handleWorkChange} required /><br />
                        <input type="text" name="description" value={description} onChange={handleDescriptionChange} placeholder="Description" required />
                        <input type="date" name="date" value={date} placeholder="addition date" onChange={handleDateChange} required />
                        <button>Add</button>
                    </form>
                </div>
        </div>
    )
}


export default Formulaire;

