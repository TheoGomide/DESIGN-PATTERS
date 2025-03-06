class Tarefa {
    private descricao : string;
    private concluida : boolean;

    constructor(descricao: string, concluida: boolean) {
        this.descricao = descricao;
        this.concluida = concluida;
    }

    public concluir(): void{
        this.concluida = true;
        console.log(`A tarefa foi concluida.`);
    }

    public detalhes(): void{
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Status: ${this.concluida}`);
    }
}

class GerenciadorTarefas  {
    private listaTarefas: Tarefa[] = [];

    constructor(listaTarefas: Tarefa[] = []) {
        this.listaTarefas = listaTarefas;
    }

    public novaTarefa(descricao: string): void {
        const tarefa = new Tarefa(descricao, false);
        this.listaTarefas.push(tarefa);
        console.log(`Nova tarefa adicionada a lista de tarefas.`);
    }

    public concluirTarefa(numeroTarefa: number): void {
        this.listaTarefas[numeroTarefa].concluir();
    }

    public mostrarLista(): void {
        let x =0;
        for (var i of this.listaTarefas) {
            this.listaTarefas[x].detalhes();
            x++;
    }
}
}

function main(): void {
    const gerenciador = new GerenciadorTarefas();

    gerenciador.novaTarefa("Terefa 1");
    gerenciador.novaTarefa("Terefa 2");
    gerenciador.novaTarefa("Terefa 3");
    gerenciador.novaTarefa("Terefa 4");
    gerenciador.concluirTarefa(1);
    gerenciador.concluirTarefa(3);
    gerenciador.mostrarLista();
}

main();