import validator from 'validator';

class Contato {
    static _total_id = 0;
    constructor(telefone, nome, email) {
        Contato._total_id += 1;
        this._id = Contato._total_id;
        this._telefone = telefone;
        this._nome = nome;
        this._email = email;
    }
    getDados() {
        return {
            id: this._id,
            nome: this._nome,
            email: this._email,
            telefone: this._telefone
        };
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
    temNomePesquisado(nomePesquisado) {
        nomePesquisado = nomePesquisado.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const nomeContato = this._nome.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        return nomeContato.includes(nomePesquisado);
    }
}

export default Contato;