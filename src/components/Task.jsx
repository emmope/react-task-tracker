import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const Task =({ task, onDelete, onToggle  }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} <FaTrash style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}  />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}
Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    reminder: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}


export default Task;

  