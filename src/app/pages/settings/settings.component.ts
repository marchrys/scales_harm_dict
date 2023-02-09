import { Component, OnInit } from '@angular/core';
import { ChordTypesService } from 'src/app/services/chord-types.service';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public selChordType: any = {};

  constructor(
    public textsService: TextsService,
    public chordTypesService: ChordTypesService
  ) { }

  ngOnInit(): void {
    this.selChordType = this.chordTypesService.getAll()[0];
    if(localStorage.getItem('selChordType') !== null) {
      this.selChordType = this.chordTypesService.getAll().find((chordType: any) => chordType.id === JSON.parse(localStorage.getItem('selChordType')!).id);
    }
  }

  public persistChordType() {
    localStorage.setItem('selChordType', JSON.stringify(this.selChordType));
    console.log(localStorage.getItem('selChordType'));
  }

}
