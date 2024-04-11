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

    filtraProdutoPorNomeId(id:number, name:string): Product|undefined{
        return this.productList.find(product => product.id === id && product.name === name);
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

}