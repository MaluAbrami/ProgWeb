import { Request, Response } from "express";
import { ModalidadesService } from "../service/ModalidadesService";
const modalidadesService = new ModalidadesService();

export function cadastrarModalidade (req: Request, res: Response){
    try{
        const novaModalidade = modalidadesService.cadastrarModalidade(req.body);
        res.status(201).json(
            {
                mensagem:"Modalidade adicionada com sucesso!", 
                modalidade: novaModalidade
            }
        );
    } 
    catch (error:any){
        res.status(400).json({ message: error.message});
    }
};