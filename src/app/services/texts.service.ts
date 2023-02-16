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
    doubleAccMsg: {
      en: 'This scale contains double accidentals, but our app does not use them, for the sake of simplicity. In general, you can obtain the same result by replacing the tonic by its enharmonic note (for example replacing a C# by a Db).',
      fr: 'Cette gamme contient des doubles altérations, mais notre appli ne les utilise pas, dans un souci de simplicité. En général, vous pouvez obtenir le même résultat en replaçant la tonique par sa note enharmonique (pr exemple remplacer un C# par un Db).'
    },
    findChords: {
      en: 'Find the chords of a scale',
      fr: 'Trouver les accords d\'une gamme'
    },
    harmTypes: {
      en: 'Harmonization chords',
      fr: 'Accords pour l\'harmonisation'
    },
    root: {
      en: 'Root',
      fr: 'Tonique'
    },
    scale: {
      en: 'Scale',
      fr: 'Gamme'
    },
    settings: {
      en: 'Settings',
      fr: 'Options'
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
