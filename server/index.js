import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { deleteToDo, getAllToDos, getToDo, postToDo, updateToDo } from './controller/todoController.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 2000;
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.post('/todos', (req, res) => postToDo(req, res));

app.get('/todos', (req, res) => getAllToDos(req, res));

app.get('/todos/:id', (req, res) => getToDo(req, res));

app.put('/update-todo/:id', (req, res) => updateToDo(req, res));

app.delete('/delete-todo/:id', (req, res) => deleteToDo(req, res));

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
})