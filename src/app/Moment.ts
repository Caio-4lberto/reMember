export interface Moment {
  id?: number;               //O ?: É PARA ATRIBUIR DE MANEIRA OPCIONAL, POIS SERÁ UM AUTO INCREMENTO DA TABELA
  title: string;
  description: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
}
