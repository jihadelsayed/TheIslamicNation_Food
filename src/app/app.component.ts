import { Component, Inject, LOCALE_ID } from '@angular/core';
import { StyleModeService } from './header/style-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }

  ngOnInit() {
    if (!localStorage.getItem('darkMode')) {
      this.checkDarkModePreference();
      window.matchMedia('(prefers-color-scheme: dark)').addListener(e => this.checkDarkModePreference());
    }

  }
  checkDarkModePreference() {
    this.styleModeService.setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)

  }
}
