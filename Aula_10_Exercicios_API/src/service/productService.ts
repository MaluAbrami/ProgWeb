import { Product } from "../model/product";
import { ProductRepository } from "../repository/productRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price, IdCategoria } = produtoData;
        if(!name || !description || !price || !IdCategoria){
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.consultarProduto(undefined, name, IdCategoria);
        if(produtoEncontrado){
            throw new Error("Produto já cadastrado!");
        }
        const novoProduto = new Product(name, description, price, IdCategoria);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any, name: any, categoria:any): Product|undefined{
        
        if(id && name && categoria){
            console.log("Com ID, Name e IdCategoria", id, name, categoria);
            const idNumber: number = parseInt(id);
            const idCategoria: number = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorNomeIdCategoria(idNumber, name, idCategoria);
            return product;
        }else if(id && name){
            console.log("Com ID e Name", id, name);
            const idNumber: number = parseInt(id);
            const product = this.productRepository.filtraProdutoPorIdNome(idNumber, name);
            return product;
        }else if(name && categoria){
            console.log("Com Name e IdCategoria", name, categoria);
            const idCategoria: number = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorNomeCategoria(name, idCategoria);
            return product;
        }else if(id && categoria){
            console.log("Com ID e IdCategoria", id, categoria);
            const idNumber: number = parseInt(id);
            const idCategoria: number = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorIdCategoria(idNumber, idCategoria);
            return product;
        }else if(id){
            console.log("Com ID", id);
            const idNumber: number = parseInt(id);
            const product = this.productRepository.filtraProdutoPorId(idNumber);
            return product;
        }else if(name){
            console.log("Com Name", name);
            const product = this.productRepository.filtraProdutoPorNome(name);
            return product;
        }else if(categoria){
            console.log("Com IdCategoria", categoria);
            const idCategoria: number = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorCategoria(idCategoria);
            return product;
        }
    
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