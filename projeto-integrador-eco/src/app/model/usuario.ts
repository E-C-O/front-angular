import { Venda } from './venda';
import { Endereco } from './endereco';
export class Usuario{
    public idUsuario: string;
    public nome: string;
    public email: string;
    public senha: string;
    public endereco: Endereco;
    public venda: Venda;
     
}