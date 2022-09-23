import React from 'react'

const UserList = ({listOfUSer}) => {
  return (
    <div>
        <h1 style={{ fontsize:'bold', color:'blue' }}>UserList</h1>
        <ul className="list-group">
            {listOfUSer.map((todo)=>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                {todo.name}
            </li>)}

        </ul>
    </div>
  )
}

export default UserList