import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartenerDTO } from '../models/partenerDTO.model';
import { RaportDTO } from '../models/raportDTO.model';
import { SucursalaDTO } from '../models/sucursalaDTO.model';
import { VanzatorDTO } from '../models/vanzatorDTO.model';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private UMPath=Settings.serverUrl+"/um";
  private VanzatoriPath=Settings.serverUrl+"/vanzatori";
  private ArticolePath=Settings.serverUrl+"/articole";
  private ParteneriPath=Settings.serverUrl+"/parteneri";
  private SucursalePath=Settings.serverUrl+"/sucursale";
  private ProiectePath=Settings.serverUrl+"/proiecte";
  private VanzariPath=Settings.serverUrl+"/vanzari";
  private LiniiVanzariPath=Settings.serverUrl+"/liniiVanzari";
  private GrupeArticolePath=Settings.serverUrl+"/grupeArticole";
  private FormReportPath=Settings.serverUrl+"/formReport";
  constructor(private http: HttpClient) { }

  getUM(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.UMPath, {
        headers
    }); 
  }

  getVanzatori(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.VanzatoriPath, {
        headers
    }); 
  }

  getVanzari(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.VanzariPath, {
        headers
    }); 
  }

  getLiniiVanzariByIdVanzare(idVanzare: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('IDIntrare', idVanzare)
    return this.http.get(this.LiniiVanzariPath, {
        headers, params
    }); 
  }

  getValoriRaport(raportDTO: RaportDTO): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('CodVanzator', raportDTO.CodVanzator)
    .set('NumeArticol', raportDTO.NumeArticol)
    .set('NumePartener', raportDTO.NumePartener)
    .set('NumeSucursala', raportDTO.NumeSucursala)
    .set('DataStart', raportDTO.DataStart)
    .set('DataEnd', raportDTO.DataEnd)
    return this.http.get(this.FormReportPath, {
        headers, params
    }); 
  }

  getArticole(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.ArticolePath, {
        headers
    }); 
  }

  getParteneri(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.ParteneriPath, {
        headers
    }); 
  }

  getSucursale(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.SucursalePath, {
        headers
    }); 
  }

  getProiecte(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.ProiectePath, {
        headers
    }); 
  }

  getGrupeArticole(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(this.GrupeArticolePath, {
        headers
    }); 
  }

  postPartener(partenerDTO: PartenerDTO): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    return this.http.post(this.ParteneriPath, partenerDTO, {
        headers
    }); 
  }

  postVanzator(vanzatorDTO: VanzatorDTO): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    return this.http.post(this.VanzatoriPath, vanzatorDTO, {
        headers
    }); 
  }

  postSucursala(sucursalaDTO: SucursalaDTO): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    return this.http.post(this.SucursalePath, sucursalaDTO, {
        headers
    }); 
  }

  updateLinieVanzare(linieVanzare: any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    return this.http.put(this.LiniiVanzariPath, linieVanzare, {
        headers
    }); 
  }

  deleteLinieVanzare(IDIntrare: any, NumarLinie: any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('IDIntrare', IDIntrare)
    .set('NumarLinie', NumarLinie)
    return this.http.delete(this.LiniiVanzariPath, {
        headers, params
    }); 
  }


  
}
