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
    setNome(novoNome) {
        this._nome = novoNome;
    }
    setEmail(novoEmail) {
        this._email = novoEmail;
    }
    setTelefone(novoTelefone) {
        this._telefone = novoTelefone;
    }
    getID() {
        return this._id;
    }
    temNomePesquisado(text) {
        return this._nome.toLowerCase().includes(text.toLowerCase());
    }
}

class Cliente extends Contato {
    constructor(telefone, nome, email, empresa) {
        super(telefone, nome, email);
        this._empresa = empresa;
    }
}

class Amigo extends Contato {
    constructor(telefone, nome, email, dt_aniversario) {
        super(telefone, nome, email);
        this.data_aniversario = dt_aniversario;
    }
}

class ColegaDeTrabalho extends Contato {
    constructor(telefone, nome, email, departamento) {
        super(telefone, nome, email);
        this._departamento = departamento;
    }
}

// Menu
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
