import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ScalesService } from 'src/app/services/scales.service';
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
    public notesService: NotesService,
    public scalesService: ScalesService
  ) { }

  ngOnInit(): void {
    this.selTonicId = this.loadFromLocalStorage('selTonicId');
    this.selScaleId = this.loadFromLocalStorage('selScaleId');
  }

  public persistInLocalStorage(key: string, property: any) {
    localStorage.setItem(key, property);
  }

  public loadFromLocalStorage(key: string) {
    let property: string;

    localStorage.getItem(key) !== null 
        ? property = localStorage.getItem(key)!
        : property = '1';

    return property;
  }

}
