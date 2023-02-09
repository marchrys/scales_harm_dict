import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss']
})
export class DictComponent implements OnInit {

  constructor(
    public textsService: TextsService,
    public notesService: NotesService
  ) { }

  ngOnInit(): void {
    console.log(this.notesService.getTonics());
  }

}
