import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScalesService {
  private scales: any = [
    {
      id: 1,
      name: {
        en: 'major',
        fr: 'majeur'
      },
      intervals: [5, 10, 13, 18, 23, 28],
      degrees: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
      triads: ['', 'm', 'm', '', '', 'm', '°'],
      sevenths: ['M7', 'm7', 'm7', 'M7', '7', 'm7', 'm7(b5)']
    },
    {
      id: 2,
      name: {
        en: 'harmonic minor',
        fr: 'mineur harmonique'
      },
      intervals: [5, 8, 13, 18, 21, 28],
      degrees: ['i', 'ii°', 'iii+', 'iv', 'V', 'bVI', 'vii°'],
      triads: ['m', '°', '+', 'm', '', '', '°'],
      sevenths: ['mM7', 'm7(b5)', '+M7', 'm', '7', 'M7', 'm7(b5)']
    }
  ];

  constructor() { }
}
