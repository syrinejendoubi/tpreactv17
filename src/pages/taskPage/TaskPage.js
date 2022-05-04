import { useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/taskList/TaskList";

export default function TaskPage() {
  const loading = false;
  const [isVisible, setIsVisible] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "learn Html",
      duration: 60,
      type: "IT",
      startDate: "2022-02-15",
    },
    {
      id: 2,
      title: "learn React",
      duration: 120,
      type: "IT",
      startDate: "2022-02-15",
    },
    {
      id: 3,
      title: "learn Angular",
      duration: 200,
      type: "IT",
      startDate: "2022-02-15",
    },
  ]);
  function addTask(title) {
    setTasks([...tasks, { id: tasks.length + 1, title: title }]);
  }
  function UpdateTask(id, title) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title } : task
    );
    setTasks(newTasks);
  }
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  console.log(isVisible);
  return (
    <div className="App">
      <button onClick={toggleVisibility}>Toggle</button>
      {loading && <div>loading...</div>}
      {!loading && isVisible && (
        <>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} UpdateTask={UpdateTask} />
        </>
      )}
    </div>
  );
}
