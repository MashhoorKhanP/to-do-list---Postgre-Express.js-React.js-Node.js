import pool from "../config/db.cjs";

export const postToDo = async (req, res) => {
  try {
    const { description } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]
    );
    res.json(newToDo);
  } catch (error) {
    console.log(error.message);
  }
}

export const getAllToDos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo_id");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
}

export const getToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(toDo.rows);
  } catch (error) {
    console.log(error.message);
  }
}

export const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedToDo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING * ", [description, id]);
    res.json(updatedToDo.rows);
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id]);
    res.json(deletedToDo.rows);
  } catch (error) {
    console.log(error.message);
  }
}