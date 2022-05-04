import Task from "../task/Task";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map(function (x) {
        return (
          <Task
            key={x.id}
            id={x.id}
            title={x.title}
            duration={x.duration}
            type={x.type}
            startDate={x.startDate}
            UpdateTask={props.UpdateTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
