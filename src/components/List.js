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
    return (<div className="output">
        <ul>
            {entries.map((task, index) => (
                <li key={index}>
                    <div>
                    <p><span>Work </span>: {task.work}</p>
                    <p><span>Description </span>: {task.description}</p>
                    <p><span>Date </span>: {task.date}</p>
                    </div>
                    <div className="output-secondPart">
                        <button className="output-button" onClick={()=>handleEdit(index)}>Update</button>
                        <button className="output-button" onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                </li>))}
        </ul>
    </div>)
}

export default List;