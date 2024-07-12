import { Request, Response } from "express";
import { LivroService } from "../service/livroService";

const livroService = new LivroService();

export async function cadastrarLivro (req: Request, res: Response) {
    try{
        const novoLivro = await livroService.cadastrarLivro(req.body);
        res.status(201).json(
            {
                mensagem: "Livro adicionado com sucesso!",
                livro: novoLivro
            }
        );
    } catch(error: any){
        res.status(400).json({ message: error.message });
    }
}