import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { take, scan, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-bad',
  standalone: true,
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
  imports: [FormsModule],
})
export class RxjsComponent {
  startNumber: number = 0;
  result?: bigint = undefined;

  clear() {
    this.result = undefined;
  }

  calculate() {
    if (this.startNumber < 0) {
      this.result = undefined;
      return;
    }

    this.result = 1n;

    interval(0)
      .pipe(
        take(this.startNumber),
        scan((acc: bigint, i: number) => acc * BigInt(i + 1), 1n)
      )
      .subscribe({
        next: (val) => (this.result = val),
      });
  }
}
