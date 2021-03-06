import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() titleCard: string = '';
  @Input() cssClass: string = '';
  //@Input() title: string = '';
  //@Input() subtitle: string = '';
  //@Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
