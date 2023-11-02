// const prompt = require("prompt-sync") ({sigint: false});
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import Agenda from "./AgendaDeContatos.js";

import Contato from "./tipo-contato/Contato.js";
import Cliente from "./tipo-contato/Cliente.js";
import Amigo from "./tipo-contato/Amigo.js";
import ColegaDeTrabalho from "./tipo-contato/ColegaDeTrabalho.js";

class Menu {
    constructor() {
        this._agenda = new Agenda();
    }

    static _linha() {
        console.log("\n----------------------------------------\n");
    }

    static nomePropriedadeParaTitulo(nomePropriedade) {
        nomePropriedade = nomePropriedade
            .replace(/[_\s]+/g, " ")
            .split(" ")
            .map(word => {
                word = word.charAt(0).toUpperCase() + word.slice(1);
                return word;
            })
            .join(" ");
        return nomePropriedade;
    }

    principal() {
        Menu._linha();
        console.log(
        '1- Adicionar Contato\n'+
        '2- Visualizar Agenda\n'+
        '3- Editar Contato\n'+
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
                this.visualizarAgenda(this._agenda.getAgenda());
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
                Menu._linha();
                return false;
            default:
                console.error(`\nA opção ${opcao} é inválida!`);
        }
        return true;
    }

    _selecionarContato() {
        console.log("Digite o ID do Contato:");
        const id = parseInt(prompt(">> "));

        const lista = this._agenda.getAgenda();
        const contato = lista.find(contato => contato.getId() === id);
        if (contato === undefined) console.log("Contato inválido\n");

        return contato;
    }

    pesquisarContatosNaAgenda() {
        Menu._linha();
        console.log("Digite o nome do Contato:");
        const nome = prompt(">> ").trim().replace(/ +/, " ");
        if (!Contato.validateNome(nome)) {
            console.error("Nome inválido!");
            return;
        }
        const contatos = this._agenda.pesquisarContatos(nome);
        this.visualizarAgenda(contatos);
    }

    excluirContatoDaAgenda() {
        Menu._linha();
        const contato = this._selecionarContato();
        if (contato === undefined) return;
        this._agenda.excluirContato(this._agenda.getAgenda().indexOf(contato));
    }

    // editarContato() {
    //     Menu._linha();
    //     console.log(
    //     "1- Editar Nome\n"+
    //     "2- Editar Email\n"+
    //     "3- Editar Telefone\n"+
    //     "4- Editar Tudo\n"+
    //     "5- Cancelar"
    //     );
    //     const opcao = parseInt(prompt('>> '));

    //     if (opcao === 5) {
    //         console.log("\n( Evento Cancelado )");
    //         return;
    //     }
    //     if (opcao !== 1 && opcao !== 2 && opcao !== 3 && opcao !== 4) {
    //         console.error(`\nA opção ${opcao} é inválida!!!`);
    //         return true;
    //     }

    //     const contato = this._selecionarContato();
    //     if (contato === undefined) return;

    //     switch(opcao) {
    //         case 1:
    //             console.log("\nDigite Nome:");
    //             const nome = prompt(">> ").trim().replace(/ +/, " ");
    //             if (Contato.validateNome(nome)) {
    //                 console.error("Nome inválido!");
    //                 return;
    //             }
    //             contato.setNome(nome);
    //             break;
    //         case 2:
    //             console.log("\nDigite Email:");
    //             const email = prompt(">> ").replace(/ +/, "");
    //             if (contato.setEmail(email);) {
    //                 console.error("Email inválido!");
    //                 return;
    //             }
    //             break;
    //         case 3:
    //             console.log("\nDigite Telefone:");
    //             const telefone = prompt(">> ").trim().replace(/ +/, "");
    //             if (contato.setTelefone(telefone)) {
    //                 console.error("Telefone inválido!");
    //                 return;
    //             }
    //             break;
    //         case 4:
    //             for (const nomePropriedade in contato) {
    //                 const title = Menu.nomePropriedadeParaTitulo(nomePropriedade);
    //                 const valorPropriedade = contato[nomePropriedade];
    //                 if (typeof valorPropriedade === "function") continue;

    //                 console.log(`\nDigite ${title}:`);
    //                 const valor = prompt(">> ").trim().replace(/ +/, "");
    //                 if (contato[`validate${nomePropriedade}`](valor)) {
    //                     console.error("Valor inválido!");
    //                     return;
    //                 }
    //                 contato[`set${nomePropriedade}`](valor);
    //             }
    //     }
    // }

    visualizarAgenda(lista) {
        Menu._linha();

        if (lista.length === 0) {
            console.log("( Contato não encontrado )");
            return;
        }

        for (const contato of lista) {
            const dados = contato.getDados();
            for (const propriedade in dados) {
                const title = Menu.nomePropriedadeParaTitulo(propriedade);
                console.log(`${title}: ${dados[propriedade]}`);
            }
            console.log();
        }
    }

    adicionarContatoNaAgenda() {
        Menu._linha();
        console.log(
        '1- Contato Padrão\n'+
        '2- Cliente\n'+
        '3- Amigo\n'+
        '4- Colega de Trabalho\n'+
        '5- Cancelar'
        );
        const opcao = parseInt(prompt('>> '));

        if (opcao === 5) {
            console.log("\n( Evento Cancelado )");
            return;
        }
        if (opcao !== 1 && opcao !== 2 && opcao !== 3 && opcao !== 4) {
            console.error(`\nA opção ${opcao} é inválida!!!`);
            return;
        }
        
        console.log("\nDigite o Nome:");
        const nome = prompt(">> ").trim().replace(/ +/, " ");
        if (!Contato.validateNome(nome)) {
            console.error("Nome inválido!");
            return;
        }
        
        console.log("\nDigite o Email:");
        const email = prompt(">> ").replace(/ +/, "");
        if (!Contato.validateEmail(email)) {
            console.error("Email inválido!");
            return;
        }
        
        console.log("\nDigite o Telefone:");
        const telefone = prompt(">> ").trim().replace(/ +/, " ");
        if (!Contato.validateNome(nome)) {
            console.error("Telefone inválido!");
            return;
        }

        switch(opcao) {
            case 1:
                this._agenda.adicionarContato(new Contato(nome, email, telefone));
                break;
            case 2:
                console.log("\nDigite a Empresa:");
                const empresa = prompt(">> ").trim().replace(/ +/, " ");
                if (!Cliente.validateEmpresa(empresa)) {
                    console.error("Empresa inválida!");
                    break;
                }
                this._agenda.adicionarContato(new Cliente(nome, email, telefone, empresa));
                break;
            case 3:
                console.log("\nDigite a Data de Aniversário:");
                const dataAniversario = prompt(">> ").trim().replace(/ +/, " ");
                if (!Amigo.validateDataAniversario(dataAniversario)) {
                    console.error("Data inválida!");
                    break;
                }
                this._agenda.adicionarContato(new Amigo(nome, email, telefone, dataAniversario));
                break;
            case 4:
                console.log("\nDigite o Departamento:");
                const departamento = prompt(">> ").trim().replace(/ +/, " ");
                if (!ColegaDeTrabalho.validateDepartamento(departamento)) {
                    console.error("Departamento inválido!");
                    break;
                }
                this._agenda.adicionarContato(new ColegaDeTrabalho(nome, email, telefone, departamento));
                break;
        }
    }
}

export default Menu;