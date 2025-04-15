import { Routes } from '@angular/router';
import { YieldComponent } from './yeild/yield.component';
import { WorkerComponent } from './worker/worker.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { BadComponent } from './bad/bad.component';
import { RxjsComponent } from './rxjs/rxjs.component';

export const routes: Routes = [
  { path: '', component: BadComponent },
  { path: 'bad', component: BadComponent },
  { path: 'yield', component: YieldComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'timeout', component: TimeoutComponent },
  { path: 'rxjs', component: RxjsComponent },
];
