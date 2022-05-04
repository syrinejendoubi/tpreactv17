import { useState } from "react";
import "./taskForm.css";
export default function TaskForm(props) {
  //props.say();
  const steps = ["enter a title", "click on the button"];
  const addTask = "Add a task";
  const steps2 = [];
  const [title, setTitle] = useState("");
  console.log("title", title);
  function handleAddTask() {
    props.addTask(title);
  }
  return (
    <>
      <ul>
        {steps.map(function (x) {
          return <li> {x}</li>;
        })}
      </ul>
      <form action="" className="form">
        <input
          type="text"
          name="task"
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          {addTask}
        </button>
      </form>
    </>
  );
}
