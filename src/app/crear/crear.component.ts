import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  palabra:any={
    nombre:'',
    significado:''
  };
  palabraParam: string ='';
  constructor(public params: ActivatedRoute ) { 

  }

  ngOnInit(): void {
    this.params.params.subscribe(
      (params)=>{
        
        if(params['variable']){
          this.palabra={
            nombre: params['variable'],
            significado:''
          }
        };
      }
    );
  }

}
