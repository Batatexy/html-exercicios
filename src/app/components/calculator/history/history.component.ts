import { Component, Input, ViewChild } from '@angular/core';
import { Calculation } from '../../../models/calculation';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent
{
  createHistory(calculation: Calculation): void
  {
    let history : HTMLElement | null = document.getElementById("history");
    let calculationP = document.createElement("p");
    calculationP.textContent = calculation.numberOne + calculation.signal + calculation.numberTwo + "=" + calculation.result;
    history?.appendChild(calculationP);
  }
}
