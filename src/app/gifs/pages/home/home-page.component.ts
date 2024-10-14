import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/giphyResponse.nterface';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private gifService: GifsService) {
    
  }

  get gifs() : Gif[] {
    return this.gifService.gifList;
  }
}
