import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: any = [
    {
      id: 1,
      name: 'C',
      isTonic: true
    },
    {
      id: 3,
      name: 'C#',
      isTonic: true
    },
    {
      id: 4,
      name: 'Db',
      isTonic: true
    },
    {
      id: 6,
      name: 'D',
      isTonic: true
    },
    {
      id: 8,
      name: 'D#',
      isTonic: true
    },
    {
      id: 9,
      name: 'Eb',
      isTonic: true
    },
    {
      id: 11,
      name: 'E',
      isTonic: true
    },
    {
      id: 12,
      name: 'Fb',
      isTonic: false
    },
    {
      id: 13,
      name: 'E#',
      isTonic: false
    },
    {
      id: 14,
      name: 'F',
      isTonic: true
    },
    {
      id: 16,
      name: 'F#',
      isTonic: true
    },
    {
      id: 17,
      name: 'Gb',
      isTonic: true
    },
    {
      id: 19,
      name: 'G',
      isTonic: true
    },
    {
      id: 21,
      name: 'G#',
      isTonic: true
    },
    {
      id: 22,
      name: 'Ab',
      isTonic: true
    },
    {
      id: 24,
      name: 'A',
      isTonic: true
    },
    {
      id: 26,
      name: 'A#',
      isTonic: true
    },
    {
      id: 27,
      name: 'Bb',
      isTonic: true
    },
    {
      id: 29,
      name: 'B',
      isTonic: true
    },
    {
      id: 30,
      name: 'Cb',
      isTonic: false
    },
    {
      id: 31,
      name: 'B#',
      isTonic: false
    },
  ];

  constructor() { 
    const initialNotesLength = this.notes.length;
    for(let i=0; i<initialNotesLength; i++) {
      this.notes.push({
        id: this.notes[i].id + 31,
        name: this.notes[i].name,
        isTonic: false
      });
    }
  }

  public getAll() {
    return this.notes;
  }

  public getTonics() {
    return this.notes.filter((note: any) => note.isTonic);
  }
}
