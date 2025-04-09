import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeout',
  standalone: true,
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.scss',
  imports: [FormsModule],
})
export class TimeoutComponent {
  startNumber: number = 0;
  result?: bigint = undefined;

  calculate() {
    this.result = undefined;
    const n = BigInt(this.startNumber);
    let result = 1n;
    let i = 1n;

    const computeChunk = () => {
      const chunkSize = 1000n;
      const end = i + chunkSize;

      while (i <= n && i < end) {
        result *= i;
        i++;
      }

      this.result = result;

      if (i <= n) {
        setTimeout(computeChunk, 0);
      }
    };

    computeChunk(); // Start the computation
  }
}
