import validator from 'validator';

class AgendaDeContatos {
    constructor() {
        this._agenda = [];
    }

    getAgenda() {
        return this._agenda;
    }

    pesquisarContatos(nome) {
        return this._agenda.filter(contato => contato.temNomePesquisado(nome));
    }

    adicionarContato(contato) {
        if (this.verificarContato(contato)) {
            this._agenda.push(contato);
        }
    }
    
    excluirContato(index) {
        this._agenda.splice(index, 1);
    }
    
    editarContato(contato, propriedade, valor) {
        propriedade = propriedade.replace(/_+/g, ' ').split(" ").map(word => {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            return word;
        }).join("");
        contato[`set${propriedade}`](valor);
    }
    
    verificarContato(contato) {
        const dados = contato.getDados();
        if (this._agenda.includes(dados.id))
            return false;
        if (isNaN(dados.id))
            return false;
        if (this._agenda.includes(dados.id))
            return false;
    }
}

export default AgendaDeContatos;