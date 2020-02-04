import { Produto } from './produto';

export class Categoria {
    public idCategoria: number;
    public nome: string;
    public produto: Produto[];
}