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
        
        if(id){
            const idNumber: number = parseInt(id);
            const product = this.productRepository.filtraProdutoPorId(idNumber);
            return product;
        }
        if(name){
            const product = this.productRepository.filtraProdutoPorNome(name);
            return product;
        }
            
        console.log(id)
        return undefined;
    }

    getProducts():Product[]{
        return this.productRepository.filtraTodosProdutos();
    }
}