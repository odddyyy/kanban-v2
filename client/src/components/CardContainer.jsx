import React from 'react'
import Cards from '../components/Cards'

export default function CardContainer({ title, tasks }) {
    return (
        <div className="col-sm-12 col-md-3 card-column first" style={{overflow:'scroll', height:'85vh'}}>
            <h3 className="main-text sticky-top">{title}</h3>
            <div className="row" style={{overflow:'scroll'}}>
                {tasks.map(task => (
                    <Cards key={task._id} task={task}/>
                ))}
            </div>
        </div>
    )
}
