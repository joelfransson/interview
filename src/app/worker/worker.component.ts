import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-worker',
  standalone: true,
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.scss',
  imports: [FormsModule],
})
export class WorkerComponent implements OnDestroy {
  startNumber: number = 0;
  result?: bigint = undefined;
  private worker?: Worker;

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./factorialWorker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        this.result = BigInt(data);
      };
    } else {
      console.error('Web Workers are not supported in this environment.');
    }
  }

  calculate() {
    if (this.worker) {
      this.result = undefined;
      this.worker.postMessage(this.startNumber);
    }
  }

  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}
