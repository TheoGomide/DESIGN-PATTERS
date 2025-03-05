class Conta {
    private numero: number;
    private saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public getNumber(): number{
        return this.numero;
    }

    public getSaldo(): number{
        return this.saldo;
    }
}

class SisBancario {
    private contas: Conta[] = [];

    constructor(contas: Conta[] = []) {
        this.contas = contas;
    }

    public criarConta(numero: number, saldoInicial: number): void {
        const conta = new Conta(numero, saldoInicial);
        this.contas.push(conta);
        console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
    }

    public depositar(numeroConta: number, valor: number): void {
    const conta = this.contas.find(c => c.getNumber() === numeroConta);
        if (conta) {
            let saldo = conta.getSaldo()
            saldo += valor;
            console.log(`Depósito de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.getSaldo()}.`);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    public sacar(numeroConta: number, valor: number): void {
    const conta = this.contas.find(c => c.getNumber() === numeroConta);
    if (conta) {
        if (conta.getSaldo() >= valor) {
            let saldo = conta.getSaldo()
            saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.getSaldo()}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    } else {
        console.log("Conta não encontrada.");
    }
    }

    public consultarSaldo(numeroConta: number): void {
    const conta = this.contas.find(c => c.getNumber() === numeroConta);
    if (conta) {
        console.log(`Saldo da conta ${numeroConta}: R$${conta.getSaldo()}.`);
    } else {
        console.log("Conta não encontrada.");
    }
}
}

function main(): void {
    const banco = new SisBancario();

    banco.criarConta(123, 1000);
    banco.depositar(123, 500);
    banco.sacar(123, 200);
    banco.consultarSaldo(123);
}

main();