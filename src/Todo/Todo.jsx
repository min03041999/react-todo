import React, { useState } from "react";
import "../css/todo.css";
import TodoList from "./features/TodoList";
import TodoAdd from "./features/TodoAdd";

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

  // Add todo
  const todoAdd = (job) => {
    job.id = jobs.length + 1;
    console.log(job.id);
    setJobs([...jobs, job]);
  };

  // Delete todo
  const todoDelete = (id) => {
    console.log(id);
    const deleteJob = jobs.filter((item) => item.id !== id);
    console.log(deleteJob);
    setJobs(deleteJob);
  };

  return (
    <div className="container">
      <div className="title">Todo List | Use React Hook</div>
      <div className="grid-row">
        <div>
          <div>
            <h2 className="title-item">Add Jobs</h2>
            <TodoAdd todoAdd={todoAdd} />
          </div>
        </div>
        <div>
          <h2 className="title-item">Views Jobs</h2>
          <TodoList jobs={jobs} todoDelete={todoDelete} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
