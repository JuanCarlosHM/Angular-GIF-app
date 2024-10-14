import { Component, Input, OnInit } from '@angular/core';
import { Gif, Rating, Type } from '../../interfaces/giphyResponse.nterface';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  
  @Input()
  gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif is nedeed for work'); 
  }

 

}
