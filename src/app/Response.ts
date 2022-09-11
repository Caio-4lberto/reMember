export interface Response<T> {  //O T É UMM ARGUMNETO/PROPRIEDADE QUE SERÁ UM GENERIC
  message?: string;             //NÃO É OBRIGATÓTIO, POIS QUANDO HOUVER UM SELECT NÃO RETORNA NADA
  data: T;
}
