import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})

export class NovaTransferenciaComponent{


  // constructor() {
  // }

  // ngOnInit(): void {

  // }

  valor: number = 0;
  destino: number = 0;

  transferir(){
    console.log("metodo trasnferir usado")

  }

}
