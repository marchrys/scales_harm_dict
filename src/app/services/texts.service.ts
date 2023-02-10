import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  private lang: string = '';
  private texts: any = {
    appTitle: {
      en: 'Scales Harmonization Dictionary',
      fr: 'Dictionnaire d\'harmonisation de gammes'
    },
    findChords: {
      en: 'Find the chords of a scale',
      fr: 'Trouver les accords d\'une gamme'
    },
    root: {
      en: 'Root',
      fr: 'Tonique'
    },
    settings: {
      en: 'Settings',
      fr: 'Options'
    },
    harmTypes: {
      en: 'Harmonization chords',
      fr: 'Accords pour l\'harmonisation'
    }
  }

  constructor() { 
    const navLang = navigator.language.split('-')[0];
    const availableLanguages = ['en', 'fr'];
    availableLanguages.includes(navLang) ? this.lang = navLang : this.lang = 'en';
  }

  public getLang() {
    return this.lang;
  }

  public getText(label: string) {
    return this.texts[label][this.lang];
  }
}
