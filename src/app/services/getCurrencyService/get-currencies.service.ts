import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrencyInfo } from 'src/app/models/types';

@Injectable({
  providedIn: 'root'
})
export class GetCurrenciesService {

  constructor(private httpClient: HttpClient) {


  }

  public getCurrencies() {
    return this.httpClient.get('https://api.monobank.ua/bank/currency', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Content-Type': 'json',
      })
    }) as Observable<ICurrencyInfo[]>;
  }
}
