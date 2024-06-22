"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ModalidadesController_1 = require("./controller/ModalidadesController");
const EstoqueController_1 = require("./controller/EstoqueController");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}
app.post("/api/modalidade", ModalidadesController_1.cadastrarModalidade);
app.get("/api/modalidade/todas", ModalidadesController_1.listarModalidades);
app.put("/api/modalidade", ModalidadesController_1.alterarModalidade);
app.delete("/api/modalidade", ModalidadesController_1.deletaModalidade);
app.get("/api/modalidade", ModalidadesController_1.recuperaModalidade);
app.post("/api/estoque", EstoqueController_1.cadastrarNoEstoque);
app.get("/api/modalidade/todos", ModalidadesController_1.listarModalidades);
app.get("/api/modalidade", EstoqueController_1.buscarNoEstoque);
app.listen(PORT, logInfo);
