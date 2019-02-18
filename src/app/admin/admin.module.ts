import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';
import { AdminRoutingModule } from  './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectUpdateComponent, ProjectComponent, LoginComponent,RegistroComponent],
  imports: [
    CommonModule,AdminRoutingModule
  ]
})
export class AdminModule { }
