//  import {FaTimes} from 'react-icons'

const Task = (prop) => {
  return (
    <div className='task'>
        <h3>
        {prop.text} 
        </h3>
        <p>
        {prop.day}
        </p>

    </div>
  )
}

export default Task

