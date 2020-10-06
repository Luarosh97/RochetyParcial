export class Cliente {
    identificacion: string;
    nombre: string;
    capitalInicial: number;
    tasaInteres: number;
    tiempo: number;
    valor: number;

            Calcularcapital() {
            var tasa = this.tasaInteres / 100;
            this.valor = this.capitalInicial * Math.pow((1 + tasa), this.tiempo);
        }
}


