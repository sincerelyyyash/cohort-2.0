import React from 'react'

const Todo = ({title, description}) => {
  return (
    <>
    <h3>{title}</h3>
    <p>{description}</p>
    </>
  )
}

export default Todo