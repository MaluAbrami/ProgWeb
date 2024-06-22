import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";

const estoqueService = new EstoqueService();

export function cadastrarNoEstoque (req: Request, res: Response){
    try{
        const novoEstoque = estoqueService.cadastrarNoEstoque(req.body);
        res.status(201).json(
            {
                mensagem: "Item adicionado no estoque com sucesso!",
                estoque: novoEstoque
            }
        );
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};

export function listaEstoque (req: Request, res: Response){
    try{
        res.status(200).json(estoqueService.getEstoque());
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
}