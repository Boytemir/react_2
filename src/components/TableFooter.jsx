import React from 'react'

export const TableFooter = (props) => {
  return (
    <tbody>
    <tr>
      <th scope="row">{props.namber}</th>
      <td>{props.posts.text}</td>
      <td>{props.posts.stack}</td>
      <td>
        <button onClick={() => props.remove(props.posts)} className='btn btn-outline-danger'>delete</button>
      </td>
    </tr>
  </tbody>
  )
}
