import { LinieVanzare } from "./linie-vanzare.model";
import { Vanzare } from "./vanzare.model";

export class VanzareDTO{
    vanzare: Vanzare;
    liniiVanzari: LinieVanzare[];

    constructor( vanzare: Vanzare,
        liniiVanzari: LinieVanzare[]){
            this.vanzare=vanzare;
            this.liniiVanzari=liniiVanzari;
        }
}