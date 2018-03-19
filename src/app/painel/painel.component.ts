import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frases.model'
import { FRASES } from './frases.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:'
  public resposta: string;

  public rodada: number = 0;
  public fraseRodada: Frase;

  constructor() {
    this.fraseRodada = this.frases[this.rodada];
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificaResposta(): void{
    if(this.fraseRodada.frasePtBr === this.resposta){
      this.rodada++;
      this.fraseRodada = this.frases[this.rodada];
    }else{
      
    }
  }

}
