import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/livro";

export class LivroRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Livros.Livro (
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publishedDate VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertLivro(title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "INSERT INTO vendas.Product (name, price) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            const livro = new Livro(title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async filterAllLivro() :Promise<Livro[]>{
        const query = "SELECT * FROM livros.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterLivro(id: number) :Promise<Livro>{
        const query = "SELECT * FROM livros.livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro localizado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async updateLivro(id:number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "UPDATE livros.livro set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ?  where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const product = new Livro(title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }
}