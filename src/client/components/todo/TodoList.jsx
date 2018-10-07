import React from 'react';
import ButtonAndIcon from '../../utils/ButtonAndIcon';

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todoTask => (
        <tr key={todoTask._id}>
          <td>{todoTask.description}</td>
          <td>
            <ButtonAndIcon style='danger' icon='trash-o'
              onClick={() => props.handleRemove(todoTask)} />
          </td>
        </tr>
      )
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
};