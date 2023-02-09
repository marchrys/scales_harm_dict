import { Component, OnInit } from '@angular/core';
import { ChordTypesService } from 'src/app/services/chord-types.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public selChordTypeId: string = '1';

  constructor(
    public textsService: TextsService,
    public chordTypesService: ChordTypesService
  ) { }

  ngOnInit(): void {
    localStorage.getItem('selChordTypeId') !== null 
      ? this.selChordTypeId = localStorage.getItem('selChordTypeId')! 
      : this.selChordTypeId = '1';
  }

  public persistChordType() {
     localStorage.setItem('selChordTypeId', this.selChordTypeId);
  }

}
