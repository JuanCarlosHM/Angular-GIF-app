import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

   constructor(private gifsService:  GifsService) {
   }

   searchGif(tag : string) : void {
      this.gifsService.addTag(tag); 
   }

   get tagHistory() : string[] {
    return this.gifsService.tagsHistory;
   }
    

}
