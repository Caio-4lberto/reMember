import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string
  /* O !: SERVE PARA NÃO PRECISAR DECLARAR UM VALOR FIXO A VARIÁVEL btnText CASO
  QUISESSE ADICIONAR BASTAVA COLOCAR @Input() btnText!: string = "Compartilhar!"  */

  constructor() { }

  ngOnInit(): void {
  }

}
