import React from "react";
import '../styles/Output.css'


const List = (props) => {
    const { entries } = props
    return (<div className="card-part">
        <ul>
            {entries.map((task, index) => (
                <li key={index}>
                    <p>{task.work}</p>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                </li>))}
        </ul>
    </div>)
}

export default List;