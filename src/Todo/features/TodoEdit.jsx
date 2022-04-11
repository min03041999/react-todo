import React, { useState } from "react";

import "../../css/todo-edit.css";

const TodoEdit = (props) => {
  const [job, setJob] = useState(props.currentJob);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setJob({ ...job, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateJob(job.id, job);
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
      <button className="btn-add">Edit Job</button>
      <button onClick={() => props.setEditing(false)} className="btn-delete">
        Cancel
      </button>
    </form>
  );
};

export default TodoEdit;
