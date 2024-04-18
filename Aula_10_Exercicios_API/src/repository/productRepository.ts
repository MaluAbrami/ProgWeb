import { Product } from "../model/product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id:number): Product|undefined{
        return this.productList.find(product => product.id === id);
    }

    filtraProdutoPorNome(name:string): Product|undefined{
        return this.productList.find(product => product.name === name);
    }

    filtraProdutoPorCategoria(categoria:number): Product|undefined{
        return this.productList.find(product => product.IdCategoria === categoria);
    }

    filtraProdutoPorIdNome(id:number, name:string): Product|undefined{
        return this.productList.find(product => product.id === id && product.name === name);
    }

    filtraProdutoPorNomeCategoria(name:string, categoria:number): Product|undefined{
        return this.productList.find(product => product.name === name && product.IdCategoria === categoria);
    }

    filtraProdutoPorIdCategoria(id:number, categoria:number): Product|undefined{
        return this.productList.find(product => product.id === id && product.IdCategoria === categoria);
    }
    
    filtraProdutoPorNomeIdCategoria(id:number, name:string, categoria:number): Product|undefined{
        return this.productList.find(product => product.id === id && product.name === name && product.IdCategoria === categoria);
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

}