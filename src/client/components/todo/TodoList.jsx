import React from 'react';
import ButtonAndIcon from '../../utils/ButtonAndIcon';

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todoTask => (
        <tr key={todoTask._id}>
          <td className={todoTask.done ? 'markedAsDone': ''}>{todoTask.description}</td>
          <td>
            <ButtonAndIcon style='success' icon='check' hide={todoTask.done}
              onClick={() => props.handleMarkAsDone(todoTask)} />
            <ButtonAndIcon style='warning' icon='undo' hide={!todoTask.done}
              onClick={() => props.handleMarkAsPending(todoTask)} />
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