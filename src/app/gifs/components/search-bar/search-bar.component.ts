import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  templateUrl: './search-bar.component.html',
  //styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  
  constructor(private gifsService: GifsService) {
    
    
  }



  @ViewChild('tagInput')
  public tagInput! : ElementRef<HTMLInputElement>;
  
  searchTag() {
    const newTag = this.tagInput.nativeElement.value; 
  

    this.gifsService.addTag(newTag);

    this.tagInput.nativeElement.value = '';
    
  }

}
