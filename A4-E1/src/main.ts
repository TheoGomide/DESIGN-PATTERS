import { CarrinhoMadeira, CarrinhoPlastico } from "./components/carrinho";
import { BonecaMadeira, BonecaPlastico } from "./components/boneca";

class Montagem {
  private carrinho: any;
  private boneca: any;

  constructor(material: string) {
    if (material === "Madeira") {
      this.carrinho = new CarrinhoMadeira();
      this.boneca = new BonecaMadeira();
    } else if (material === "Plastico") {
      this.carrinho = new CarrinhoPlastico();
      this.boneca = new BonecaPlastico();
    } else {
      throw new Error("Fabrica invalida!");
    }
  }

  play(): void {
    this.carrinho.play();
    this.boneca.play();
  }
}

const fabrica = "Madeira";
const app = new Montagem(fabrica);

app.play();