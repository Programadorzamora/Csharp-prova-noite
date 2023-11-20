import { Categoria } from "./categoria.model";

export interface Tarefa {
    TarefaId?: number;
    Titulo: string;
  Descricao: string;
  criadoEm?: string;
  Categoria: Categoria;
  CategoriaId: number;
  Status: string;
}
