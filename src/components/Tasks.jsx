import Task from "./Task"

const Tasks = (prop) => {
  const {tasks} = prop

  return (  
    <>
      {tasks.map((elem) => (
      <Task key={elem.index} text={elem.text} day={elem.day}/>
        ))}
    </>
  )
}

export default Tasks






