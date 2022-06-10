import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  constructor(private http : HttpClient) { }

  buscarPalabra(palabra: string){
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`);
  }
}
