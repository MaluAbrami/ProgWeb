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

export function listarModalidades (req: Request, res: Response){
    try{
        res.status(200).json(modalidadesService.getModalidades());
    } catch(error: any){
        res.status(404).json({message: error.message});
    }
};

export function alterarModalidade (req: Request, res: Response){
    try{
        const novaModalidade = modalidadesService.alterarModalidade(req.body);
        res.status(201).json(
            {
                mensagem: "Modalidade alterada com sucesso!",
                modalidade: novaModalidade
            }
        );
    } catch(error: any){
        res.status(400).json({ message: error.message });
    }
};

export function deletaModalidade (req:Request, res:Response){
    try{
        modalidadesService.deletaModalidade(req.body);
        res.status(200).json({ message: "Modalidade deletada com sucesso!"});
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};

export function recuperaModalidade (req:Request, res: Response){
    try{
        const id = Number(req.query.id); //Aqui estou convertendo o ID para número
        const modalidade = modalidadesService.consultarModalidadePorId(id);
        if(modalidade){
            res.status(200).json(
                {
                    mensagem: "Modalidade encontrada com sucesso",
                    modalidade: modalidade
                }
            );
        }
        else{
            res.status(404).json({mensagem: "Modalidade não encontrada"});
        }
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
}