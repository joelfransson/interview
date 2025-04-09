import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yield',
  standalone: true,
  templateUrl: './yield.component.html',
  styleUrl: './yield.component.scss',
  imports: [FormsModule],
})
export class YieldComponent {
  startNumber: number = 0;
  result?: bigint = undefined;

  private *factorialGenerator(n: bigint): Generator<bigint, bigint, unknown> {
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
      result *= i;
      yield result;
    }
    return result;
  }

  async calculate() {
    this.result = undefined;
    const generator = this.factorialGenerator(BigInt(this.startNumber));

    for (const partialResult of generator) {
      this.result = partialResult;
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
}
