import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <a routerLink="/pages/tarefa/listar">lista</a><br>
    <a routerLink="/pages/tarefa/listar-tarefas">tarefas</a><br>
    <a mat-list-item routerLink="/pages/tarefa/listar">
        <div class="item">
          
          <span> Listar Produtos </span>
        </div>
      </a>


  `,
  styles: []
})
export class AppComponent {
  title = 'FRONT';
}
