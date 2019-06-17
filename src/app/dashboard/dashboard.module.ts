import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent} from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effects'
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
