import Contato from './Contato.js';
import validator from 'validator';

class ColegaDeTrabalho extends Contato {
    constructor(telefone, nome, email, departamento) {
        super(telefone, nome, email);
        this._departamento = departamento;
    }
    getDados() {
        const dadosContato = super.getDados();
        dadosContato.departamento = this._departamento;
        return dadosContato;
    }
    setDepartamento(departamento) {
        if (!validator.isEmpty(departamento))
            this._departamento = departamento;
        else
            return false;
    }
}

export default ColegaDeTrabalho;