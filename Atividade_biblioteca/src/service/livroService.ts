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
}