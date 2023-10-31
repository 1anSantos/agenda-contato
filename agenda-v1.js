//? Dependencências 
const prompt = require("prompt-sync") ({sigint: false});

//? Classes e Objetos
class Contato {
    static _total_id = 0;
    constructor(telefone, nome, email) {
        Contato._total_id += 1;
        this._id = Contato._total_id;
        this._telefone = telefone;
        this._nome = nome;
        this._email = email;
    }
    atualizarNome(novoNome) {
        this._nome = novoNome;
    }
    atualizarEmail(novoEmail) {
        this._email = novoEmail;
    }
    atualizarTelefone(novoTelefone) {
        this._telefone = novoTelefone;
    }
    retornaID() {
        return this._id;
    }
    temNomePesquisado(text) {
        return this._nome.toLowerCase().includes(text.toLowerCase());
    }
    mostrarDados() {
        console.log(`\nID: ${this._id}\nTelefone: ${this._telefone}\nNome: ${this._nome}\nEmail: ${this._email}\n`);
    }
}

const listaDeContatos = {
    _lista: [],
    adicionarContato: function() {
        console.log("\nDigite o Telefone:");
        let telefone = prompt(">> ").trim().replace(/ +/g, ' ');
        if (!this._verificarTelefone(telefone)) return;

        console.log("\nDigite o Nome:");
        let nome = prompt(">> ").trim().replace(/ +/g, ' ');
        if (!this._verificarNome(nome)) return;

        console.log("\nDigite o Email:");
        let email = prompt(">> ").trim().replace(/ +/g, ' ');
        if (!this._verificarEmail(email)) return;

        this._lista.push(new Contato(telefone, nome, email));
    },

    visualizarLista: function() {
        if (this._lista.length === 0) {
            console.log("\nVocê não tem contatos adicionados");
        }
        else {
            linha();
            for (let contato of this._lista) {
                contato.mostrarDados();
            }
            linha();
        }
    },

    editarContato: function() {
        linha();
        console.log("\n"+
        "1- Editar Telefone\n"+
        "2- Editar Nome\n"+
        "3- Editar Email\n"+
        "4- Editar Tudo\n"+
        "5- Cancelar"
        );
        let opcaoEdit = parseInt(prompt('>> '));
        if (opcaoEdit !== 1 && opcaoEdit !== 2 && opcaoEdit !== 3 && opcaoEdit !== 4) {
            linha();
            return;
        }

        let valueTelefone = false;
        let valueNome = false;
        let valueEmail = false;
        let newTelefone;
        let newNome;
        let newEmail;
        let contato = this._selecionarContato();

        if (contato === undefined) return;
        if (opcaoEdit !== 1 && opcaoEdit !== 2 && opcaoEdit !== 3 && opcaoEdit !== 4) {
            console.log("Opção inválida");
            return;
        }

        if (opcaoEdit === 1 || opcaoEdit === 4) {
            console.log("\nDigite o novo Telefone:");
            newTelefone = prompt('>> ').trim();
            valueTelefone = this._verificarTelefone(newTelefone);
        }
        if (opcaoEdit === 2 || opcaoEdit === 4) {
            console.log("\nDigite o novo nome:");
            newNome = prompt('>> ').trim().replace(/ +/g, ' ');
            valueNome = this._verificarNome(newNome);
        }
        if (opcaoEdit === 3 || opcaoEdit === 4) {
            console.log("\nDigite o novo Email:");
            newEmail = prompt('>> ').trim().replace(/ +/g, ' ');
            valueEmail = this._verificarEmail(newEmail);
        }
        linha();

        if (valueNome) {
            contato.atualizarNome(newNome);
        }
        if (valueEmail) {
            contato.atualizarEmail(newEmail);
        }
        if (valueTelefone) {
            contato.atualizarTelefone(newTelefone);
        }
    },

    excluirContato: function() {
        linha();
        let contato = this._selecionarContato();
        if (contato === undefined) {
            linha();
            return;
        }
        let index = this._lista.indexOf(contato);
        this._lista.splice(index, 1);
        console.log("\nContato Excluído com Sucesso!");
        linha();
    },

    pesquisarContato: function() {
        console.log("Digite o nome a ser pesquisado:");
        let nome = prompt(">> ").trim().replace(/ +/g, " ");

        let listaPesquisa = this._lista.filter(obj => {
            return obj.temNomePesquisado(nome);
        });

        linha();
        if (listaPesquisa.length === 0) {
            console.log("\nNenhum contato com esse nome!!!");
        }
        for (const contato of listaPesquisa) {
            contato.mostrarDados();
        }
        linha();
    },

    _selecionarContato: function() {
        console.log("\nDigite o ID do Contato:");
        let id = parseInt(prompt(">> "));
        let obj = this._lista.find(contato => {return contato.retornaID() === id});
        if (obj === undefined) console.log("Contato inválido\n");
        return obj;
    },
    _verificarNome: function(nome) {
        if (nome !== '') return true;
        console.log("Nome Inválido!");
        return false;
    },
    _verificarEmail: function(email) {
        let teste = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
        if (teste !== null) return true;
        console.log("Email Inválido!");
        return false;
    },
    _verificarTelefone: function(telefone) {
        let teste = telefone.match(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/);
        if (teste !== null) return true;
        console.log("Telefone Inválido!");
        return false;
    }
};


//? MENU 
let opcao = 0;
while (opcao != 6) {
    console.log('\n'+
    '1- Adicionar contato\n'+
    '2- Visualizar lista\n'+
    '3- Editar contato\n'+
    '4- Excluir Contato\n'+
    '5- Pesquisar Contato\n'+
    '6- Sair'
    );
    opcao = parseInt(prompt('>> '));
    switch (opcao) {
        case 1:
            listaDeContatos.adicionarContato();
            break;
        case 2:
            listaDeContatos.visualizarLista();
            break;
        case 3:
            listaDeContatos.editarContato();
            break;
        case 4:
            listaDeContatos.excluirContato();
            break;
        case 5:
            listaDeContatos.pesquisarContato();
            break;
        case 6:
            console.log("Saindo do Sistema...");
            break;
        default:
            console.log(`A opção ${opcao} é inválida!!!`);
    }
}

function linha() {
    console.log("\n---------------------------------");
}
