import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InternsComponent } from './interns/interns.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AddInternsComponent } from './add-interns/add-interns.component';
import { InternService } from '../services/intern.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    InternsComponent,
    HomeComponent,
    CreateComponent,
    AddInternsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule ,
  ],
  providers: [InternService],
})
export class TrimbleInternsModule {}
