import { Component, OnInit } from '@angular/core';
import { PalabrasService } from './palabras.service';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  resultados: any = [];
  palabraBuscada: string ='';
  constructor(private _service:PalabrasService) { }

  ngOnInit(): void {
  }

  buscarPalabra(){
    this._service.buscarPalabra(this.palabraBuscada).subscribe(
      (data)=>{
        this.resultados = data;
      },
      (error)=>{
        //alert(error.message);
      }
    );
  }

}
