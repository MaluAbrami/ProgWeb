import { Livro } from "../model/livro";
import { LivroRepository } from "../repository/livroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();
    livroModel : Livro = new Livro();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const {title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const isbnEncontrado = await this.livroRepository.filtrarLivroPorIsbn(isbn);
        console.log("Resultado isbnEncontrado:", isbnEncontrado);
        if(isbnEncontrado && isbnEncontrado.isbn === isbn){
            throw new Error("Já existe um livro com esse isbn!");
        }
        const novoLivro = await this.livroRepository.insertLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert", novoLivro);
        return novoLivro;
    }

    async listarTodosLivros(): Promise<Livro[]>{
        const livro = await this.livroRepository.filterAllLivro();
        if(!livro){
            throw new Error("Não há nenhum livro cadastrado");
        }
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

    async filtrarLivro(livroData: any): Promise<Livro>{
        if(!livroData){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(livroData, 10);

        const livro = await this.livroRepository.filterLivro(id);
        if(livro === null){
            throw new Error("Livro não encontrado!");
        }
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async atualizarLivro(livroData: any): Promise<Livro>{
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }
        const livroEncontrado = await this.livroRepository.filterLivro(id);
        if(!livroEncontrado ){
            throw new Error("Livro não existe");
        }
        const livro = await this.livroRepository.updateLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update", livro);
        return livro;
    }

    async deletarLivro(livroData: any): Promise<Livro>{
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const livroEncontrado = await this.livroRepository.filterLivro(id);
        if(!livroEncontrado){
            throw new Error("Livro não existe");
        }

        const livro = await this.livroRepository.deleteLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete", livro);
        return livro;
    }
}