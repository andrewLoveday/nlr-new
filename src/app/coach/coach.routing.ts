import { Routes } from '@angular/router';

import { coachComponent } from './coach.component';

export const coachRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: coachComponent,
        data: {
          title: 'Top performing Coaches',
          urls: [
            { title: 'Dashboard', url: '/coach' },
            { title: 'Coaches' }
          ]
        }
      }
    ]
  }
];
