import { Component, SimpleChange, ViewChild } from '@angular/core';
import { ButtonsComponent } from "./buttons/buttons.component";
import { FormsModule } from '@angular/forms';
import { Calculation } from '../../models/calculation';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from "./display/display.component";
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule, ButtonsComponent, DisplayComponent, HistoryComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

// @Output() NomeDoEmitter: EventEmitter<Tipo> = new EventEmitter();
// this.concluir.emit(this.tarefa);

// //Colocar a classe 'concluida' se tarefa.concluida for true
// [ngClass]="{ 'concluida': tarefa.concluida }" [class]="classeEstilo"

// //colocar o botão disabled se tarefa.concluida for true
// [disabled] = "tarefa.concluida"

// @Input() executaAlgo!: () => void;
// (concluir)="marcarConcluida(&event)"

//@viewChild("id") id

export class CalculatorComponent
{
  buttons: Array<string>;
  savedSignal: string = "";
  savedNumber: string = "";
  actualNumber: string = "";
  arrayHistory: Array<Calculation> = [];

  @ViewChild('history') history!: HistoryComponent;

  //Injetar dependencias
  constructor()
  {
    this.buttons =
    [
      "C", "A", "%", "÷",
      "7", "8", "9", "×",
      "4", "5", "6", "−",
      "1", "2", "3", "+",
      "0", "," ,"=",
    ];

    this.savedSignal = "";
    this.savedNumber = "";
    this.actualNumber = "";
    this.arrayHistory = [];
  }

  //Verifica mudanças em inputs em tempo real, exemplo: digitar na amazon já vai aparecendo produtos
  // ngOnChanges(changes: SimpleChanges)
  // {
  //   if(changes["mensagem"])
  //   {

  //   }
  // }

  //Hooks de ciclo de vida / lifecycle hook
  //Será executado antes de tudo, antes do renderizamento em tela
  ngOnInit()
  {
    // if(this.classeEstilo == "btn")
    console.log("Calculadora On Init")
  }

  //Executa depois do ngInit, mas antes do renderizamento em tela
  //Exemplo: Depois de carregar os dados da API em ngOnInit, aqui a gente trata os dados
  ngAfterContentInit()
  {
    console.log("Calculadora After Content Init")
  }

  //Executa depois da renderização da tela, pra não mostrar eles carregando
  ngAfterViewInit()
  {

  }

  //Deixou de ser renderizado em tela
  ngOnDestroy()
  {

  }

  //Processar o clique do botão, de forma respectiva à sua função
  processButton(buttonValue: string): void
  {
    document.getElementById("input-calculator")?.focus;

    //Caso o campo esteja com um numero ou ""
    if (parseFloat(this.actualNumber.replace(",",".")) || this.actualNumber == "" || this.actualNumber == "0" || this.actualNumber == "0,")
    {
      //Caso seja um número
      if (Number(buttonValue) || buttonValue == "0")
      {
        //Verificar se o número é 0
        if (buttonValue == "0")
        {
          //Caso seja, verificar se já não há um 0 no campo, para impedir de ficar somando varias vezes
          if (this.actualNumber != "0") this.actualNumber += buttonValue;
        }
        else
        {
          //Caso já haja um zero no campo, o remove
          if (this.actualNumber == "0")
          {
            this.actualNumber = "";
          }
          //Adiciona o número clicado
          this.actualNumber += buttonValue;
        }
      }
      //Qualquer outro carácter
      else
      {
        switch(buttonValue)
        {
          case ",":
            //Verificar se já não tem uma virgula e se existe um numero digitado
            if (!this.actualNumber.includes(","))
            {
              //Se não tiver nada no campo, adiciona um zero
              if (this.actualNumber == "")
              {
                this.actualNumber += 0;
              }

              //Adicionar a virgula
              this.actualNumber += buttonValue;
            }
            break;

          //Apagar um digito
          case "A":
            this.actualNumber = this.actualNumber.slice(0, -1);
            break;

          //Resetar os valores
          case "C":
            this.savedNumber = "";
            this.actualNumber = "";
            this.savedSignal = "";
            break;

          //Operadores
          default:
            //Verificar se existe um número no campo
            if (this.actualNumber != "")
            {
              //Verificar se existe um número que foi anteriormente digitado
              if (this.savedNumber != "")
              {
                  //Caso aperte o "=", pega o sinal salvo e o passa para os calculos
                  if (buttonValue == "=")
                  {
                    this.calculate(this.savedSignal);
                  }
                  //Caso apenas aperte um dos botoes, o envia para os calculos
                  else
                  {
                    this.calculate(buttonValue);
                  }
              }
              //Caso não, apenas salva o novo número no "Numero salvo"
              else
              {
                this.savedNumber = this.actualNumber;
              }
            }

            //Salvar o sinal para futuras contas, menos o "="
            if (buttonValue != "=")
            {
              this.savedSignal = buttonValue;
            }

            //Resetar o campo
            this.actualNumber = "";
        }
      }
    }
  }

  calculate(buttonValue: string): void
  {
    //Trocar as virgulas por pontos, já que parseFloat não aceita virgulas
    this.savedNumber = this.savedNumber.replace(",", ".")
    this.actualNumber = this.actualNumber.replace(",", ".")

    //Verificar qual operação foi escolhida e executar seu calculo
    let result: number = 0;
    switch(buttonValue)
    {
      case "+":
        result = parseFloat(this.savedNumber) + parseFloat(this.actualNumber)
        break;

      case "−":
        result = parseFloat(this.savedNumber) - parseFloat(this.actualNumber)
        break;

      case "×":
        result = parseFloat(this.savedNumber) * parseFloat(this.actualNumber)
        break;

      case "÷":
        result = parseFloat(this.savedNumber) / parseFloat(this.actualNumber)
        break;

      case "%":
        result = (parseFloat(this.savedNumber) / 100) * parseFloat(this.actualNumber)
        break;

      default:
        console.log("?");
    }

    //Voltar as virgulas para exibir na tela
    this.savedNumber = this.savedNumber.replace(".", ",");
    this.actualNumber = this.actualNumber.replace(".", ",");
    let resultString: string = result.toString().replace(".", ",");

    let newCalculation = {numberOne: this.savedNumber, signal: buttonValue, numberTwo: this.actualNumber, result: resultString}

    //Usar função do elemento filho para criar um bloco na tela
    this.history.createHistory(newCalculation)

    //Então alterar o valor antigo do numero salvo para este novo resultado
    this.savedNumber = resultString;

    //Dar push na lista de elementos do tipo Calculation
    this.arrayHistory.push(newCalculation);
    console.log(this.arrayHistory);
  }
}
