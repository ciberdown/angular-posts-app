import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from '../components/admin-main/admin-main.component';
import { TemplateDrivenFormComponent } from '../components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      {
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
