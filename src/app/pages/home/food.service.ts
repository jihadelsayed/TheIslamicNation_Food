import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private httpClient: HttpClient
  ) {}
  currentLang = this.localeId || 'en'; // or 'ar'
  getFood() {
    return this.httpClient.get(environment.JSON_URL + 'food.halal.json');
  }
}
