import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, AuthActions, LoginAttempted, LoginSuccessful, LoginFailed, LogoutSuccessful } from './auth.actions';
import { AuthService } from './auth.service';
import { switchMap, catchError, map } from 'rxjs/operators'
import { of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {


  @Effect()
  loginAttempted$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAttempted),
    switchMap((data: LoginAttempted) => this.authService
      .login(data.payload)
      .pipe(
        map((userTokenObj: any) => new LoginSuccessful(userTokenObj.token)),
        catchError(() => of(new LoginFailed()))
      ))
  );


  @Effect()
  loginSuccessful$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccessful),
    switchMap(() => of(this.router.navigateByUrl('dashboard'))));

  @Effect({ dispatch: false })
  logoutRequested$ = this.actions$.pipe(
    ofType(AuthActionTypes.LogoutRequested),
    switchMap(() => this.authService.logout().pipe(
      map(() => new LogoutSuccessful())
    )));

    @Effect({ dispatch: false })
    logoutSuccessful$ = this.actions$.pipe(
      ofType(AuthActionTypes.LogoutSuccessful),
      switchMap(() => of(this.router.navigateByUrl('login'))));
        

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

}
