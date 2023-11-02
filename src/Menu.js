import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Agenda from "./AgendaDeContatos.js";

import Contato from "./tipo-contato/Contato.js";
import Cliente from "./tipo-contato/Cliente.js";
import Amigo from "./tipo-contato/Amigo.js";
import ColegaDeTrabalho from "./tipo-contato/ColegaDeTrabalho.js";

class Menu {
    constructor() {
        this.agenda = new Agenda();
    }

    general() {
        this._linha();
        console.log(
        '1- Adicionar contato\n'+
        '2- Visualizar lista\n'+
        '3- Editar contato\n'+
        '4- Excluir Contato\n'+
        '5- Pesquisar Contato\n'+
        '6- Sair'
        );
        const opcao = parseInt(prompt('>> '));
        switch (opcao) {
            case 1:
                this.adicionarContatoNaAgenda();
                break;
            case 2:
                this.visualizarAgenda();
                break;
            case 3:
                this.editarContato();
                break;
            case 4:
                this.excluirContatoDaAgenda();
                break;
            case 5:
                this.pesquisarContatosNaAgenda();
                break;
            case 6:
                console.log("\nSaindo do Sistema...");
                this._linha();
                return false;
            default:
                console.error(`\nA opção ${opcao} é inválida!!!`);
                this._linha();
        }
    }

    adicionarContatoNaAgenda() {
        this._linha();
        console.log(
        '1- Contato Padrão\n'+
        '2- Cliente\n'+
        '3- Amigo\n'+
        '4- Colega de trabalho\n'+
        '6- Sair'
        );
        const opcao = parseInt(prompt('>> '));

        switch(opcao) {
            case 1: break;
            case 2: break;
            case 3: break;
            case 4: break;
            case 6:
                console.log("Saindo...");
                this._linha();
                break;
            default:
                console.error(`A opção ${opcao} é inválida!!!`);
                this._linha();
        }
    }

    visualizarAgenda() {
        this._linha();
        const lista = this.agenda.getAgenda();

        for (const contato of lista) {
            const dados = contato.getDados();
            for (const propriedade in dados) {
                const title = propriedade.replace(/_+/g, ' ').split(" ").map(word => {
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                    return word;
                }).join(" ");

                console.log(`${title}: ${dados[propriedade]}`);
            }
            console.log();
        }
    }

    _linha() {
        console.log("\n----------------------------------------\n");
    }
}

export default Menu;