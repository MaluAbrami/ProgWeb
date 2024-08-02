import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

export class ProductController{

productService = new ProductService();

 async cadastrarProduto (req: Request, res: Response){
    try {
        const novoProduto = await this.productService.cadastrarProduto(req.body);
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

 async atualizarProduto (req: Request, res: Response){
    try {
        const produto = await this.productService.atualizarProduto(req.body);
        res.status(200).json(
            {
                mensagem:"Produto atualizado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

 async deletarProduto (req: Request, res: Response){
    try {
        const produto = await this.productService.deletarProduto(req.body);
        res.status(200).json(
            {
                mensagem:"Produto deletado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

 async filtrarProduto (req: Request, res: Response){
    try {
        const produto = await this.productService.filtrarProduto(req.query.id);
        res.status(200).json(
            {
                mensagem:"Produto encontrado com sucesso!",
                produto:produto
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

 async listarTodosProduto (req: Request, res: Response){
    try {
        const produtos = await this.productService.listarTodosProdutos();
        res.status(200).json(
            {
                mensagem:"Produtos listados com sucesso!",
                produtos:produtos
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};
};