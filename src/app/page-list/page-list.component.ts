import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    // Sanitize the HTML content of each page's snippet
    this.pages.forEach((page) => {
      page.snippet = this.sanitizeSnippet(page.snippet);
    });
  }
  sanitizeSnippet(snippet: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(snippet);
  }
  @Input() pages: any[] = [];
}
