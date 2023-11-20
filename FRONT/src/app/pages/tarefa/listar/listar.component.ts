import { Component } from '@angular/core';
import { Tarefa } from "src/app/Models/tarefa.model";
import { Categoria } from './../../../Models/categoria.model';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  colunasTabela: string[] = [
    "id",
    "titulo",
    "descricao",
    "criadoEm",
    "categoria",
    "categoriaId",
    "status"
  ];
  tarefas: Tarefa[] = [];

  constructor(
    private client: HttpClient
  ) {
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //Requisição com sucesso
        next: (tarefas) => {
          this.tarefas = tarefas;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }


}
