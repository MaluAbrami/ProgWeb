import express from 'express';
import { cadastrarLivro, listarTodosProdutos } from './controller/livroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
app.get("/api/books", listarTodosProdutos)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));