import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bad',
  standalone: true,
  templateUrl: './bad.component.html',
  styleUrl: './bad.component.scss',
  imports: [FormsModule],
})
export class BadComponent {
  startNumber: number = 0;
  result?: bigint = undefined;

  clear() {
    this.result = undefined;
  }

  calculate() {
    this.result = BigInt(this.startNumber);
    for (let i = 1n; i <= this.startNumber; i++) {
      this.result *= i;
    }
  }
}
