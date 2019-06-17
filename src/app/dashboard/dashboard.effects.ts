import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, switchMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DashboardActionTypes, DashboardActions, DashboardLoadEnd } from './dashboard.actions';
import { DashboardService } from './dashboard.service';



@Injectable()
export class DashboardEffects {


  @Effect()
  loadDashboards$ = this.actions$.pipe(
    ofType(DashboardActionTypes.DashboardLoadStart),
    switchMap(() => this.dashboardService.loadDashboard() .pipe(
      map((data) => new DashboardLoadEnd(data))
    )),
    
  );


  constructor(private actions$: Actions, private dashboardService: DashboardService) {}

}
