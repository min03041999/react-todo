import React from "react";
import PropTypes from "prop-types";

import "../../css/todo-list.css";

TodoList.propTypes = {
  jobs: PropTypes.array,
};

function TodoList(props) {
  const { jobs } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Job name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.id}</td>
              <td>{job.jobname}</td>
              <td>{job.description}</td>
              <td>
                {/* <button className="btn-edit" onClick={() =>  props.todoEdit(job)}>Edit</button>
                                    <button className="btn-delete" onClick={() =>  props.todoDelete(job.id)}>Delete</button> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Jobs</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TodoList;
