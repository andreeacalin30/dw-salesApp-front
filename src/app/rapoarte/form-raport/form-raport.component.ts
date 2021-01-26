import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RaportDTO } from 'src/app/models/raportDTO.model';
import { RaportValoriMediiDTO } from 'src/app/models/raportValoriMediiDTO.model';
import { RaportValoriNormaleDTO } from 'src/app/models/raportValoriNormaleDTO';
import { RaportValoriTotaleDTO } from 'src/app/models/raportValoriTotaleDTO.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-raport',
  templateUrl: './form-raport.component.html',
  styleUrls: ['./form-raport.component.css']
})
export class FormRaportComponent implements OnInit {

  public raportForm: FormGroup;
  public vanzatorLista: any;
  public sucursalaLista: any;
  public articolLista: any;
  public proiectLista: any;
  public partenerLista: any;
  dataStart: any;
  dataEnd: any;
  public valoriNormale:boolean;
  public valoriMedii:boolean;
  public valoriTotale:boolean;
  public allList:any;
  public valoriNormaleDTO:RaportValoriNormaleDTO;
  public valoriMediiDTO:RaportValoriMediiDTO;
  public valoriTotaleDTO:RaportValoriTotaleDTO;

  displayedColumns: string[] = ['pret', 'cantitate', 'vat', 'discount', 'platit', 'comision', 'volum', 'numarTranzactii'];
  dataSource1: MatTableDataSource<RaportValoriNormaleDTO>;
  dataSource2: MatTableDataSource<RaportValoriMediiDTO>;
  dataSource3: MatTableDataSource<RaportValoriTotaleDTO>;
  @ViewChild(MatPaginator, {static: false}) paginator1: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) paginator2: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) paginator3: MatPaginator;

  public afiseazaRaportLista=[{nume: "Valori normale"}, 
  {nume:"Media valorilor"},
  {nume: "Totalul valorilor"}]
   constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.raportForm = this.formBuilder.group({
      numePartener: [''],
      numeSucursala: [''],
      numeArticol: [''],
      codVanzator: [''],
      dataStart:[''],
      dataEnd:[''],
      afiseazaRaport:['']
    });
    
   }

   async getValoriRaport(raportDTO: RaportDTO){
    var lista= await this.salesService.getValoriRaport(raportDTO).toPromise();
    return lista
   }


   async getVanzatoriLista(){
    var lista= await this.salesService.getVanzatori().toPromise();
    return lista
   }

   async getSucursaleLista(){
    var lista= await this.salesService.getSucursale().toPromise();
    return lista
   }

   async getArticoleLista(){
    var lista= await this.salesService.getArticole().toPromise();
    return lista
   }

   async getProiecteLista(){
    var lista= await this.salesService.getProiecte().toPromise();
    return lista
   }

   async getParteneriLista(){
    var lista= await this.salesService.getParteneri().toPromise();
    return lista
   }

  async ngOnInit() {
    this.proiectLista=await this.getProiecteLista();
    this.sucursalaLista=await this.getSucursaleLista();
    this.articolLista=await this.getArticoleLista();
    this.vanzatorLista=await this.getVanzatoriLista();
    this.partenerLista=await this.getParteneriLista();
  }

  parseDataStart(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataStart=value
  }

  parseDataEnd(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataEnd=value
  }
  
  async afiseazaRaport(){
    let numePartener=this.raportForm.get('numePartener').value!=""?this.raportForm.get('numePartener').value:""
    let numeSucursala=this.raportForm.get('numeSucursala').value!=""?this.raportForm.get('numeSucursala').value:""
    let numeArticol=this.raportForm.get('numeArticol').value!=""?this.raportForm.get('numeArticol').value:""
    let codVanzator=this.raportForm.get('codVanzator').value!=""?this.raportForm.get('codVanzator').value:""
    let dataStart=this.raportForm.get('dataStart').value!=""?this.dataStart:""
    let dataEnd=this.raportForm.get('dataEnd').value!=""?this.dataEnd:""
    let raportDTO=new RaportDTO(numeArticol,numePartener,numeSucursala,codVanzator,dataStart,dataEnd);
    this.allList=await this.getValoriRaport(raportDTO);
    console.log(this.allList)
    if(this.raportForm.get('afiseazaRaport').value=="Valori normale"){
    
    // this.dataSource1 = new MatTableDataSource( this.sucursaleLista);
    // this.dataSource1.paginator = this.paginator1;
      this.valoriNormale=true;
    } else if(this.raportForm.get('afiseazaRaport').value=="Media valorilor"){
      this.valoriMedii=true;
    } else if(this.raportForm.get('afiseazaRaport').value=="Totalul valorilor"){
      this.valoriTotale=true;
    }
  }

}
