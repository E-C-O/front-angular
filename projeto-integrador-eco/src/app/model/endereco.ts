import { Usuario } from './usuario';

export class Endereco {
    public idEndereco: number;
    public rua: string;
    public numero: number;
    public bairro: string;
    public cidade: string;
    public uf: string;
    public cep: string;
    public usuario: Usuario;
}