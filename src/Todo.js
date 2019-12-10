import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            <h4>The To do stuff is:</h4>
            {todo.name}
        </div>
    )
}
