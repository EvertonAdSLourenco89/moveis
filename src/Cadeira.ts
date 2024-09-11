import { Sofa } from './Sofa';

export class Cadeira {
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

  // Método para calcular o preço com desconto
  calcularDesconto(desconto: number): number {
    return this.preco - (this.preco * desconto) / 100;
  }

  // Método para verificar se a cadeira combina com o sofá
  combinaCom(sofa: Sofa): boolean {
    return this.estilo === sofa.estilo;
  }
}
