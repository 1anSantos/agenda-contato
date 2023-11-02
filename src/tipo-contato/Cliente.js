import Contato from './Contato.js';
import validator from 'validator';

class Cliente extends Contato {
    constructor(telefone, nome, email, empresa) {
        super(telefone, nome, email);
        this._empresa = empresa;
    }
    getDados() {
        const dadosContato = super.getDados();
        dadosContato.empresa = this._empresa;
        return dadosContato;
    }
    setEmpresa(empresa) {
        if (Cliente.validateEmpresa(empresa))
            this._empresa = empresa;
        else
            return false;
    }
    static validateEmpresa(empresa) {
        return typeof empresa === "string" ? !validator.isEmpty(empresa) : false;
    }
}

export default Cliente;