import express from "express";
import { alterarModalidade, cadastrarModalidade, deletaModalidade, listarModalidades, recuperaModalidade } from "./controller/ModalidadesController";
import { adicionaQuantidade, buscarNoEstoque, cadastrarNoEstoque, deletaQuantidade, listaEstoque } from "./controller/EstoqueController";
import { recuperaVenda, registrarVenda } from "./controller/VendasController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

app.post("/api/modalidade", cadastrarModalidade);
app.get("/api/modalidade/todas", listarModalidades);
app.put("/api/modalidade", alterarModalidade);
app.delete("/api/modalidade", deletaModalidade);
app.get("/api/modalidade", recuperaModalidade);

app.post("/api/estoque", cadastrarNoEstoque);
app.get("/api/estoque/todos", listaEstoque);
app.get("/api/estoque", buscarNoEstoque);
app.put("/api/estoque", adicionaQuantidade);
app.delete("/api/estoque", deletaQuantidade);

app.post("/api/venda", registrarVenda);
app.get("/api/venda", recuperaVenda);

app.listen(PORT, logInfo);