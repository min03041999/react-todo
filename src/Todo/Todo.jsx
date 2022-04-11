import React, { useState } from "react";
import "../css/todo.css";
import TodoList from "./features/TodoList";

function Todo(props) {
  const jobData = [
    {
      id: 1,
      jobname: "Programing",
      description: "1 day coding for 5 hours",
    },
    {
      id: 2,
      jobname: "Listening music",
      description: "1 day listening music for 1 hour",
    },
    {
      id: 3,
      jobname: "Watching movie (english)",
      description: "1 day watching movie for 1.5 hours",
    },
  ];

  // react hook
  const [jobs, setJobs] = useState(jobData);

  return (
    <div className="container">
      <div className="title">Todo List | Use React Hook</div>
      <div className="grid-row">
        <div></div>
        <div>
          <h2 className="title-item">Views Jobs</h2>
          <TodoList jobs={jobs} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
