import Contato from './Contato.js';
import validator from 'validator';

class Amigo extends Contato {
    constructor(telefone, nome, email, dt_aniversario) {
        super(telefone, nome, email);
        this._data_aniversario = dt_aniversario;
    }
    getDados() {
        const dadosContato = super.getDados();
        dadosContato.data_aniversario = this._data_aniversario;
        return dadosContato;
    }
    setDataAniversario(dataAniversario) {
        if (Amigo.validateDataAniversario(dataAniversario))
            this._data_aniversario = dataAniversario;
        else
            return false;
    }
    static validateDataAniversario(dataAniversario) {
        return validator.isDate(dataAniversario, "DD/MM/YYYY", true);
    }
}

export default Amigo;

// const dataRegex = /^(?:\d{2}\/\d{2}\/\d{4}|\d{2}-\d{2}-\d{4})$/; // RegEx