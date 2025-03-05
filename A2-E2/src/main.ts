class Tarefas {
    private lista: string[] = [];

    constructor(lista: string[] = []) {
        this.lista = lista;
    }

    public adicionarTarefa(tarefa: string): void {
        this.lista.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    public listarTarefas(): void {
        console.log("Lista de Tarefas:");
        this.lista.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
    }

    public removerTarefa(index: number): void {
    if (index >= 0 && index < this.lista.length) {
        const tarefaRemovida = this.lista.splice(index, 1)[0];
        console.log(`Tarefa "${tarefaRemovida}" removida.`);
    } else {
        console.log("Índice inválido.");
    }
}
}

function main(): void {
    const lista = new Tarefas();

    lista.adicionarTarefa("Estudar TypeScript");
    lista.adicionarTarefa("Fazer exercícios de POO");
    lista.listarTarefas();
    lista.removerTarefa(0);
    lista.listarTarefas();
}

main();