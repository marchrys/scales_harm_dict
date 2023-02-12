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

  public getSelScale() {
    return this.scalesService.getAll().find((scale: any) => scale.id == this.selScaleId);
  }

  public getScaleNotes() {
    let scaleNotes: any = [];

    scaleNotes.push(this.notesService.getAll().find((note: any) => note.id == this.selTonicId));

    for(let i=0; i<this.getSelScale().intervals.length; i++) {
      scaleNotes.push(this.notesService.getAll().find((note: any) => note.id == parseInt(this.selTonicId) + this.getSelScale().intervals[i]));
    }

    return scaleNotes;
  }

  public hasDoubleAcc() {
    let hasDoubleAcc: boolean = false;

    if(this.getScaleNotes().includes(undefined)) { hasDoubleAcc = true };
 
    return hasDoubleAcc;
  }

}
