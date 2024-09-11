import { Cadeira } from './Cadeira';

export class Sofa {
  cor: string;
  estilo: string;
  material: string;
  preco: number;

  constructor(cor: string, estilo: string, material: string, preco: number) {
    this.cor = cor;
    this.estilo = estilo;
    this.material = material;
    this.preco = preco;
  }

  // Método para calcular o preço com frete
  calcularPrecoComFrete(frete: number): number {
    return this.preco + frete;
  }

  // Método para verificar se o sofá combina com a cadeira
  combinaCom(cadeira: Cadeira): boolean {
    return this.estilo === cadeira.estilo;
  }
}
