class AgendaDeContatos {
    constructor() {
        this._agenda = [];
    }

    getAgenda() {
        return this._agenda;
    }

    adicionarContato(contato) {
        // if (this.verificarContato(contato)) {
            this._agenda.push(contato);
        // }
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

        contato[`set${propriedade}`](valor);
    }
    
    //! Refazer Código 
    // validateContato(contato) {
    //     const dados = contato.getDados();

    //     if (isNaN(dados.id) || dados.id < 0)
    //         return false;
    //     if (this._agenda.includes(contato => contato.id === dados.id))
    //         return false;
        
    //     for (const nomePropriedade in dados) {
    //         if (nomePropriedade === "id") continue;

    //         const valorPropriedade = dados[nomePropriedade];

    //         propriedade = propriedade
    //             .replace(/[_\s]+/g, " ")
    //             .split(" ")
    //             .map(word => {
    //                 word = word.charAt(0).toUpperCase() + word.slice(1);
    //                 return word;
    //             })
    //             .join("");

    //         if (!contato[`validate${propriedade}`](valorPropriedade))
    //             return false;
    //     }
        
    //     return true;
    // }
}

export default AgendaDeContatos;