import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from '../components/admin-main/admin-main.component';
import { TemplateDrivenFormComponent } from '../components/template-driven-form/template-driven-form.component';
import { DirectiveFormsComponent } from '../components/directive-forms/directive-forms.component';

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
        component: DirectiveFormsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
