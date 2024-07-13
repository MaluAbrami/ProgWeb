import express from 'express';
import { atualizarLivro, cadastrarLivro, deletarLivro, filtrarLivro, listarTodosLivros } from './controller/livroController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", cadastrarLivro);
app.get("/api/books", listarTodosLivros);
app.get("/api/book", filtrarLivro);
app.put("/api/book", atualizarLivro);
app.delete("/api/book", deletarLivro);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));