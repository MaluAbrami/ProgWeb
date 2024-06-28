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
};

export function buscarNoEstoque (req: Request, res: Response){
    try{
        const estoque = estoqueService.consultarEstoquePorId(req.query.id);
        if(estoque){
            res.status(200).json(
                {
                    mensagem: "Item encontrado no estoque com sucesso!",
                    estoque: estoque
                }
            );
        }
        else{
            res.status(404).json({mensagem: "Item não encontrado no estoque"});
        }
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};

export function adicionaQuantidade (req: Request, res: Response){
    try{
        const novoEstoque = estoqueService.adicionaQuantidade(req.body);
        res.status(201).json(
            {
                mensagem:"Quantidade informada adicionada no estoque com sucesso!",
                estoque: novoEstoque
            }
        );
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};

export function deletaQuantidade (req: Request, res: Response){
    try{
        const novoEstoque = estoqueService.deletaQuantidade(req.body);
        res.status(201).json(
            {
                mensagem:"Quantidade informada deletada do estoque com sucesso!",
                estoque: novoEstoque
            }
        );
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};