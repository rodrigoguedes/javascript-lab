import { Ingrediente } from './../model/ingrediente';

export class ListaComprasService {

    private itens: Ingrediente[] = [];

    incluiItem(nome: string, quantidade: number) {

        console.log('incluiItem');

        // let ingrediente: Ingrediente = this.itens.find(item => item.nome == nome);

        // if (ingrediente) {
        //     ingrediente.quantidade += quantidade;
        // } else {
        //     this.itens.push(new Ingrediente(nome, quantidade));
        // }

        this.addItem(new Ingrediente(nome, quantidade));

        //this.itens.push(new Ingrediente(nome, quantidade));
    }

    incluiItens(ingredientes: Ingrediente[]) {

        console.log('incluiItens');

        for (let ingrediente of ingredientes) {

            // let ingrediente: Ingrediente = this.itens.find(item => item.nome == ingrediente.nome);

            // if (ingrediente) {
            //     ingrediente.quantidade += ingrediente.quantidade;
            // } else {
            //     this.itens.push(ingrediente);
            // }

            this.addItem(ingrediente);

        }

        // this.itens.push(...ingredientes);
    }

    addItem(ingrediente: Ingrediente){

        let ingredienteEncontrado: Ingrediente = this.itens.find(item => item.nome == ingrediente.nome);

        if (ingredienteEncontrado) {
            ingredienteEncontrado.quantidade += ingredienteEncontrado.quantidade;
        } else {
            this.itens.push(ingrediente);
        }
        
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

}