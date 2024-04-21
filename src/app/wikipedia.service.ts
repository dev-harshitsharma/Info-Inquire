import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}
  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  search(searchTerm: string) {
    return this.httpClient.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: searchTerm,
        origin: '*',
      },
    });
  }
}
