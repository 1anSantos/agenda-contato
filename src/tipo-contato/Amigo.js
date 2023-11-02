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
        if (validator.isDate(dataAniversario, "DD/MM/YYYY", true))
            this._data_aniversario = dataAniversario;
        else
            return false;
    }
}

export default Amigo;