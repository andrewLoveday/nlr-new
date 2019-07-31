import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { coachComponent } from './coach.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { coachRoutes } from './coach.routing';
import { ChartistModule } from 'ng-chartist';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { IncomeCounterComponent } from './coach-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from './coach-components/project-counter/project-counter.component';
import { ProjectComponent } from './coach-components/project/project.component';
import { RecentcommentComponent } from './coach-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from './coach-components/recent-message/recent-message.component';
import { SocialSliderComponent } from './coach-components/social-slider/social-slider.component';
import { TodoComponent } from './coach-components/to-do/todo.component';
import { ProfileComponent } from './coach-components/profile/profile.component';
import { PageAnalyzerComponent } from './coach-components/page-analyzer/pa.component';
import { WidgetComponent } from './coach-components/widget/widget.component';
import { CustomerSupportComponent } from './coach-components/customer-support/cs.component';
import { TotalEarningComponent } from './coach-components/total-earnings/te.component';
import { FeedsComponent } from './coach-components/feeds/feeds.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    PerfectScrollbarModule,
    RouterModule.forChild(coachRoutes)
  ],
  declarations: [
    coachComponent,
    IncomeCounterComponent,
    ProjectCounterComponent,
    ProjectComponent,
    RecentcommentComponent,
    RecentmessageComponent,
    SocialSliderComponent,
    TodoComponent,
    ProfileComponent,
    PageAnalyzerComponent,
    WidgetComponent,
    CustomerSupportComponent,
    TotalEarningComponent,
    FeedsComponent
  ]
})
export class coachModule { }
