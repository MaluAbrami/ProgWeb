import { Request, Response } from "express";
import { ProductService } from "../service/productService";
const productService = new ProductService();

export function cadastrarProduto (req: Request, res: Response){
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                mensagem:"Produto adicionado com sucesso!",
                produto:novoProduto
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function pesquisarProdutoPorID (req: Request, res: Response){
    try {
        const id = req.query.id;
        console.log(id);
        const name = req.query.name;
        console.log(name);
        const categoria = req.query.categoria;
        console.log(categoria);
        const produto = productService.consultarProduto(id, name, categoria);

        if(produto){
            res.status(200).json(
            {
                mensagem:"Produto encontrado com sucesso!",
                produto:produto
            }
            )

        } else{
            res.status(404).json({mensagem:"Produto não encontrado."});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export function listaProdutos (req: Request, res: Response){
    try {
        const ordem = req.query.ordem;
        console.log(ordem);
        res.status(200).json(productService.getProducts(ordem));
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};