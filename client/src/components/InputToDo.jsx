import React, { useState } from "react";

const InputToDo = () => {
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify(body),
        }
      );
      setDescription('');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">TO DO LIST</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">ADD</button>
      </form>
    </>
  );
};

export default InputToDo;
