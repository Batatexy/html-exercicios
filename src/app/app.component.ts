import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./components/calculator/calculator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{

}
