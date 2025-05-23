import { Component, Input, input } from '@angular/core';
import { AnnualData } from '../annual-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input(type) using signals
  @Input() results?: AnnualData[];
}
