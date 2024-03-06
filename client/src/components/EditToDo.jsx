import React, { useState } from "react";

const EditToDo = ({ toDo }) => {
  const [description, setDescription] = useState(toDo.description);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/update-todo/${toDo.todo_id}`,{method:'PUT',headers:{"Content-type":'application/json'}, body:JSON.stringify(body)});
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${toDo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal fade" id={`id${toDo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit ToDo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(toDo.description)}
              ></button>
            </div>

            <div className="modal-body">
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={e => handleUpdate(e)}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(toDo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditToDo;
