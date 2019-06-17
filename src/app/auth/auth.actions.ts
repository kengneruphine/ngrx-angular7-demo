import { Action } from '@ngrx/store';
import { PayloadAction } from '../app.model';

export enum AuthActionTypes {
  LoginAttempted = '[Login Page] User attempted to log in',
  LoginSuccessful = '[Auth API] Login Successful',
  LoginFailed =  '[Auth API] Login Failed',
  LogoutRequested ='[Navbar] logout requested',
  LogoutSuccessful ='[Auth Api] logout successful' 
  
}

export class LoginAttempted extends PayloadAction {
  readonly type = AuthActionTypes.LoginAttempted;
}

export class LoginFailed extends PayloadAction {
  readonly type = AuthActionTypes.LoginFailed;
}

export class LoginSuccessful extends PayloadAction {
  readonly type = AuthActionTypes.LoginSuccessful;
}

export class LogoutRequested extends PayloadAction {
  readonly type = AuthActionTypes.LogoutRequested;
}

export class LogoutSuccessful extends PayloadAction {
  readonly type = AuthActionTypes.LogoutSuccessful;
}


export type AuthActions = LoginAttempted | LoginSuccessful | LoginFailed | LogoutRequested | LogoutSuccessful;
