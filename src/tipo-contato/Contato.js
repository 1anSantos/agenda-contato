import validator from 'validator';

class Contato {
    static _total_id = 0;
    constructor(nome, email, telefone) {
        Contato._total_id += 1;
        this._id = Contato._total_id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }
    getId() {
        return this._id;
    }
    setNome(novoNome) {
        if (Contato.validateNome(novoNome)){
            this._nome = novoNome;
            return true;
        }
        else
            return false;
    }
    setEmail(novoEmail) {
        if (Contato.validateEmail(novoEmail)){
            this._email = novoEmail;
            return true;
        }
        else
            return false;
    }
    setTelefone(novoTelefone) {
        if (Contato.validateTelefone(novoTelefone)){
            this._telefone = novoTelefone;
            return true;
        }
        else
            return false;
    }
    getDados() {
        return {
            id: this._id,
            nome: this._nome,
            email: this._email,
            telefone: this._telefone
        };
    }
    temNomePesquisado(nomePesquisado) {
        nomePesquisado = nomePesquisado.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const nomeContato = this._nome.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
        return nomeContato.includes(nomePesquisado);
    }
    static validateNome(nome) {
        return typeof nome === "string" ? !validator.isEmpty(nome) : false;
    }
    static validateEmail(email) {
        return typeof email === "string" ? validator.isEmail(email) : false;
    }
    static validateTelefone(telefone) {
        return typeof telefone === "string" ? validator.isMobilePhone(telefone, "pt-BR") : false;
    }
}

export default Contato;