import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/tarefa/listar/listar.component';
import { ListarTarefasComponent } from './pages/tarefa/listar-tarefas/listar-tarefas.component';

const routes: Routes = [

  {
    path: "pages/tarefa/listar",
    component: ListarComponent,
  },
  {
    path: "pages/tarefa/listar-tarefas",
    component: ListarTarefasComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
