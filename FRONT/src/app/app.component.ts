import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <a routerLink="/pages/tarefa/listar">lista</a><br>
    
    

      <router-outlet>

      </router-outlet>

  `,
  styles: []
})
export class AppComponent {
  title = 'FRONT';
}
