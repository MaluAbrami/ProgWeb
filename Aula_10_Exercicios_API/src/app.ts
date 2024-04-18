import express from "express";
import { cadastrarProduto, pesquisarProdutoPorID, listaProdutos, exibirEstatisticas } from "./controller/productController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http://localhost:3000`);
}

app.post("/api/product", cadastrarProduto);
app.get("/api/product",pesquisarProdutoPorID);
app.get("/api/products", listaProdutos);
app.get("/api/products/stats", exibirEstatisticas);

app.listen(PORT, logInfo);