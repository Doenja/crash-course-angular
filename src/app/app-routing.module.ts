import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './planner/overview/overview.component';
import { ListComponent } from './recipes/list/list.component';

const routes: Routes = [
  { path: 'planner', component: OverviewComponent},
  { path: 'recipes', component: ListComponent},
  { path: 'my-test', component: MyTestComponent},
  { path: '', component: OverviewComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
