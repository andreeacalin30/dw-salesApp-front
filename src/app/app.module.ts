import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArticolComponent } from './forms/form-articol/form-articol.component';
import { FormParteneriComponent } from './forms/form-parteneri/form-parteneri.component';
import { FormProiecteComponent } from './forms/form-proiecte/form-proiecte.component';
import { FormSucursaleComponent } from './forms/form-sucursale/form-sucursale.component';
import { FormVanzariComponent } from './forms/form-vanzari/form-vanzari.component';
import { FormVanzatoriComponent } from './forms/form-vanzatori/form-vanzatori.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { TableArticolComponent } from './tables/table-articol/table-articol.component';
import { TableParteneriComponent } from './tables/table-parteneri/table-parteneri.component';
import { TableProiecteComponent } from './tables/table-proiecte/table-proiecte.component';
import { TableSucursaleComponent } from './tables/table-sucursale/table-sucursale.component';
import { TableVanzariComponent } from './tables/table-vanzari/table-vanzari.component';
import { TableVanzatoriComponent } from './tables/table-vanzatori/table-vanzatori.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { UpdateLinieVanzareComponent } from './update/update-linie-vanzare/update-linie-vanzare.component';
@NgModule({
  declarations: [
    AppComponent,
    FormArticolComponent,
    FormParteneriComponent,
    FormProiecteComponent,
    FormSucursaleComponent,
    FormVanzariComponent,
    FormVanzatoriComponent,
    HomePageComponent,
    MenuComponent,
    TableArticolComponent,
    TableParteneriComponent,
    TableProiecteComponent,
    TableSucursaleComponent,
    TableVanzariComponent,
    TableVanzatoriComponent,
    UpdateLinieVanzareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
