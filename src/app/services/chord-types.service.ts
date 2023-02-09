import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordTypesService {
  private chordTypes: any = [
    {
      id: 1,
      name: {
        en: 'Triads',
        fr: 'Accords de trois sons'
      }
    },
    {
      id: 2,
      name: {
        en: 'Sevenths',
        fr: 'Accords de quatre sons (septièmes)'
      }
    }
  ];

  constructor() { }

  public getAll() {
    return this.chordTypes;
  }
}
