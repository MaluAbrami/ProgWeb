import express from "express";
import {} from "./controller/ModalidadesController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

app.listen(PORT, logInfo);