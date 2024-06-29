import { Request, Response } from "express";
import { VendasService } from "../service/VendasService";
import { ItemVendaService } from "../service/ItemVendaService";

const vendasService = new VendasService();
const itemVendaService = new ItemVendaService();

export function registrarVenda(req: Request, res: Response){
    try{
        const novaVenda = vendasService.registrarVenda(req.body);
        const itens = itemVendaService.cadastrarItensVendidos(req.body.itens);
        res.status(200).json(
            {
                venda: novaVenda
            }
        );
    } catch (error: any){
        res.status(400).json({ message: error.message });
    }
};