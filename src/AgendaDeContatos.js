class AgendaDeContatos {
    constructor() {
        this._agenda = [];
    }

    getAgenda() {
        return this._agenda;
    }

    adicionarContato(contato) {
        this._agenda.push(contato);
    }

    pesquisarContatos(nome) {
        return this._agenda.filter(contato => contato.temNomePesquisado(nome));
    }
    
    excluirContato(index) {
        this._agenda.splice(index, 1);
    }
    
    editarContato(contato, propriedade, valor) {
        propriedade = propriedade
            .replace(/[_\s]+/g, " ")
            .split(" ")
            .map(word => {
                word = word.charAt(0).toUpperCase() + word.slice(1);
                return word;
            })
            .join("");

        return contato[`set${propriedade}`](valor);
    }
}

export default AgendaDeContatos;