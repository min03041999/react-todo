import React, { useState } from "react";

import "../../css/todo-add.css";

function TodoAdd(props) {
  const initialFormState = { id: null, jobname: "", description: "" };
  const [job, setJob] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setJob({ ...job, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!job.jobname || !job.description) return;
        props.todoAdd(job);
        setJob(initialFormState);
      }}
    >
      <div>
        <label>Job Name</label>
        <input
          className="field-input"
          type="text"
          name="jobname"
          value={job.jobname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          className="field-input"
          type="text"
          name="description"
          value={job.description}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn-add">Add Job</button>
    </form>
  );
}

export default TodoAdd;
