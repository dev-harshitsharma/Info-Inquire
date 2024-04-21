import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() submitted = new EventEmitter<string>();
  searchTerm: any = '';

  onInput(value: any) {
    this.searchTerm = value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.searchTerm);
  }
}
