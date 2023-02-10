import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss']
})
export class DictComponent implements OnInit {
  public selTonicId: string = '';
  public selScaleId: string = '';

  constructor(
    public textsService: TextsService,
    public notesService: NotesService
  ) { }

  ngOnInit(): void {
    this.selTonicId = this.loadFromLocalStorage('selTonicId');
  }

  public persistTonic() {
    localStorage.setItem('selTonicId', this.selTonicId)
  }

  public loadFromLocalStorage(key: string) {
    let property: string;

    localStorage.getItem(key) !== null 
        ? property = localStorage.getItem(key)!
        : property = '1';
        
    return property;
  }

}
