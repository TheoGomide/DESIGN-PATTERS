class Retangulo {
    private largura: number;
    private altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    private calculoArea(): number {
        return this.largura * this.altura;
    }

    public retorno(): void {
        const area = this.calculoArea();
        console.log(`A área: ${area}.`);
    }
}

function main(): void {
    const retangulo = new Retangulo(10, 10);

    retangulo.retorno();
}

main();
