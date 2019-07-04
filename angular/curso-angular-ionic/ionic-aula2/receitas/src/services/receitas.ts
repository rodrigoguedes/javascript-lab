import { Receita } from './../model/receita';
import { Ingrediente } from './../model/ingrediente';

export class ReceitasService {

    private receitas: Receita[] = [];
    
    adicionaReceita(nome: string, descricao: string, dificultade: string, ingredientes: Ingrediente[]) {
        this.receitas.push(new Receita(nome, descricao, dificultade, ingredientes));
    }

    getReceitas() {
        return this.receitas.slice();
    }

    alteraReceita(index: number, nome: string, descricao: string, dificultade: string, ingredientes: Ingrediente[]) {
        this.receitas[index] = new Receita(nome, descricao, dificultade, ingredientes);
    }

    removeReceita(index: number) {
        this.receitas.splice(index, 1);
    }

}