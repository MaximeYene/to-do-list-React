import React from "react";
import '../styles/Output.css'


const List = (props) => {
    const { entries,onDeleteEntry,onEditEntry } = props

    const handleDelete=(index)=>{
        onDeleteEntry(index)
    }

    const handleEdit=(index)=>{
        onEditEntry(index)
    }
    return (<div className="card-part">
        <ul>
            {entries.map((task, index) => (
                <li key={index}>
                    <p>Work : {task.work}</p>
                    <p>Description : {task.description}</p>
                    <p>Date : {task.date}</p>
                    <div>
                        <button onClick={()=>handleEdit(index)}>Update</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                </li>))}
        </ul>
    </div>)
}

export default List;