import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private httpclient: HttpClient) { }

  loadDashboard(){
    return this.httpclient.get('https://reqres.in/api/users')
  }
}
