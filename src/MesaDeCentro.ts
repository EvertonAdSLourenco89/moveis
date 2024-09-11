
import { Cadeira } from './Cadeira';

export class MesaDeCentro {
    formato: string;
    material: string;
    altura: number;
    preco: number;

    constructor(formato: string, material: string, altura: number, preco: number) {
        this.formato = formato;
        this.material = material;
        this.altura = altura;
        this.preco = preco;
    }

    // Método para calcular a área da mesa (exemplo simples para formato retangular)
    calcularArea(): number {
        if (this.formato === 'retangular') {
            return this.altura * 1.2; // Exemplo de cálculo (comprimento fixo)
        }
        return 0;
    }

    // Método para verificar se a mesa combina com uma cadeira
    combinaCom(cadeira: Cadeira): boolean {
        return this.material === cadeira.material;
    }
}
