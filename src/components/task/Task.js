import { useState } from "react";
import "./task.css";
export default function Task({
  key,
  title,
  duration,
  details,
  type,
  startDate,
  UpdateTask,
  id,
}) {
  const [updateMode, setUpdateMode] = useState(false);
  const [TitletoUpdate, setTitletoUpdate] = useState(title);

  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div className="title">{title}</div>
          <div className="duration">{duration} mn</div>
          {type}
          {startDate}
          <div className="actions">
            <button onClick={() => setUpdateMode(true)}>Update</button>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={TitletoUpdate}
            onChange={(e) => setTitletoUpdate(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              UpdateTask(Number(id), TitletoUpdate);
              setUpdateMode(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
}
