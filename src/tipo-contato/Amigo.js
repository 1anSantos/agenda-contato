import Contato from './Contato.js';

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
        this._data_aniversario = dataAniversario;
    }
}

export default Amigo;