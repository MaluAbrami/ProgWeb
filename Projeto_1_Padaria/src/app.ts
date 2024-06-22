import express from "express";
import { alterarModalidade, cadastrarModalidade, deletaModalidade, listarModalidades } from "./controller/ModalidadesController";

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

app.listen(PORT, logInfo);