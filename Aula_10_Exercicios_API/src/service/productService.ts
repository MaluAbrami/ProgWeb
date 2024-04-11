import { Product } from "../model/product";
import { ProductRepository } from "../repository/productRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;
        if(!name || !description || !price ){
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any, name: any): Product|undefined{
        
        if(id && name){
            console.log("Com ID e Name", id, name);
            const idNumber: number = parseInt(id);
            const product = this.productRepository.filtraProdutoPorNomeId(idNumber, name);
            return product;
        }else if(id){
            const idNumber: number = parseInt(id);
            const product = this.productRepository.filtraProdutoPorId(idNumber);
            return product;
        }else if(name){
            const product = this.productRepository.filtraProdutoPorNome(name);
            return product;
        }
            
        console.log(id)
        return undefined;
    }

    getProducts(ordem: any):Product[]|undefined{
        if(ordem === "desc"){
            return this.productRepository.filtraTodosProdutos().sort((a, b) => b.price - a.price);
        }
        else if(ordem === "cres"){
            return this.productRepository.filtraTodosProdutos().sort((a, b) => a.price - b.price);
        }
    }
}