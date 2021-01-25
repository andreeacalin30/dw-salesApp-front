import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Vanzare } from 'src/app/models/vanzare.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-vanzari',
  templateUrl: './table-vanzari.component.html',
  styleUrls: ['./table-vanzari.component.css']
})
export class TableVanzariComponent implements OnInit {

  displayedColumns: string[] = ['idIntrare','status', 'data', 'dataLivrare', 'discount','moneda','platit','total', 'comentarii'];
  dataSource: MatTableDataSource<Vanzare>;
  public vanzariLista: any;
  public liniiVanzari: any=[];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private salesService: SalesService) { }

  isExpansionDetailRow = (row: any) => row.hasOwnProperty('detailRow');

  async ngOnInit() {
    this.vanzariLista=await this.getVanzariLista();
    console.log(this.vanzariLista[0].IDIntrare)
    for(let i=0; i<this.vanzariLista.length; i++){
      let liniiVanzare=await this.getLiniiByIdLista(this.vanzariLista[i].IDIntrare)
      this.liniiVanzari.push(liniiVanzare);
    }
    console.log( this.liniiVanzari)
   
    this.dataSource = new MatTableDataSource( this.vanzariLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getVanzariLista(){
    var lista= await this.salesService.getVanzari().toPromise();
    return lista
   }

   editLinieVanzare(event: any, IDIntrare: any, NumarLinie: any){
      window.open("update-linieVanzare?IDIntrare=" + IDIntrare + "&NumarLinie=" + NumarLinie);
   }

  async getLinieVanzare(event:any, IdIntrare: string){
    var lista= await this.salesService.getVanzari().toPromise();
    return lista
  }

  async getLiniiByIdLista(IdIntrare:any){
    var lista= await this.salesService.getLiniiVanzariByIdVanzare(IdIntrare).toPromise();
    return lista
   }
}
