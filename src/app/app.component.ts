import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: [] = [];
  constructor(private wikipediaService: WikipediaService) {}
  title = 'search-bar-results';

  onSearchTerm(searchTerm: string) {
    this.wikipediaService.search(searchTerm).subscribe((response: any) => {
      console.log('Result', response);
      this.pages = response.query.search;
    });
  }
}
