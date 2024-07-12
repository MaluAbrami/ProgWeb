import { Livro } from "../model/livro";
import { LivroRepository } from "../repository/livroRepository";

export class LivroService{

    livroRepository: LivroRepository = new LivroRepository();

    async cadastrarLivro(livroData: any): Promise<Livro> {
        const {title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const novoLivro = await this.livroRepository.insertLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert", novoLivro);
        return novoLivro;
    }

    async listarTodosLivros(): Promise<Livro[]>{
        const livro = await this.livroRepository.filterAllLivro();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

    async filtrarLivro(livroData: any): Promise<Livro>{
        if(!livroData){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(livroData, 10);

        const livro = await this.livroRepository.filterLivro(id);
        console.log("Service - Filtrar", livro);
        return livro;
    }
}