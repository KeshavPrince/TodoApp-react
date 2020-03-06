import React from 'react'

const Todos = ({todos, deletetodo}) => {

    const thala = todos.length ? (todos.map(todo => {
        return (
            <div className = "collection-item" key = {todo.id}>
               <span onClick = {() => { deletetodo(todo.id) }} >{todo.content}</span>
            </div>
        )
    })) : (<p className = "center">No Todo's , Enjoy Your Day :)</p>)
    return (
        <div className="todos collection">
        {thala}
        </div>
    )
}

export default Todos