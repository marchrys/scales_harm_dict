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
    }
  }

  constructor() { 
    const navLang = navigator.language.split('-')[0];
    const availableLanguages = ['en', 'fr'];
    availableLanguages.includes(navLang) ? this.lang = navLang : this.lang = 'en';
  }

  public getText(label: string) {
    return this.texts[label][this.lang];
  }
}
