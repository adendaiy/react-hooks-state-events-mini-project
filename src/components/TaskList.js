// import React from "react";
// import Task from "./Task"

// function TaskList({tasks,onDeleteTask}) {
//   return (
//     <div className="tasks">
//       {tasks.map((task,index)=>( 
//         <Task key={index} task={task} onDeleteTask = {onDeleteTask} />
//       ))}
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;
// TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;

