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
  public resposta: string = '';

  public rodada: number = 0;
  public fraseRodada: Frase;

  public progresso:number = 0;

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada()
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void{
    if(this.fraseRodada.frasePtBr === this.resposta){
      this.rodada++;
      this.atualizaRodada()
      this.progresso += (100 / this.frases.length);
    }else{
      this.tentativas--;
      if(this.tentativas === -1){
        
      }

    }
  }

  public atualizaRodada(): void{
    this.fraseRodada = this.frases[this.rodada];
    this.resposta = '';
  }

}
