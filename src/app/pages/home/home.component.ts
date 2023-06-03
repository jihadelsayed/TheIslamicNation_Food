import * as namaz from 'namaz';
import * as moment from 'moment-timezone';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService) { }
  getPosition(): Observable<any> {
    return Observable.create((observer: { next: (arg0: GeolocationPosition) => void; complete: () => void; error: (arg0: GeolocationPositionError) => void; }) => {
      window.navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      },
        error => observer.error(error));
    });
  }
  coordinates = new namaz.Coordinates(35.78056, -78.6389);
  date = new Date()
  params = namaz.CalculationMethod.MuslimWorldLeague();
  precisionOn = true;
  prayerTimes:any
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  position:any
  daybreak:any
  sunriseTime:any
  noon:any
  afternoon:any
  sunset:any
  night:any

  ngOnInit(): void {
    this.getPosition().subscribe(pos => {
      console.log(pos);
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      this.position= '(' + pos.coords.latitude + ", " +pos.coords.longitude + ')'
      this.coordinates = new namaz.Coordinates(pos.coords.latitude,  pos.coords.longitude);
      console.log(this.timezone);
       this.params.madhab = namaz.Madhab.Hanafi;
       this.prayerTimes = new namaz.PrayerTimes(this.coordinates, this.date, this.params);
       this.daybreak = moment.tz(this.prayerTimes.fajr, this.timezone).format('h:mm:ss A');
       this.sunriseTime = moment.tz(this.prayerTimes.sunrise, this.timezone).format('h:mm:ss A');
       this.noon = moment.tz(this.prayerTimes.dhuhr, this.timezone).format('h:mm:ss A');
       this.afternoon = moment.tz(this.prayerTimes.asr, this.timezone).format('h:mm:ss A');
       this.sunset = moment.tz(this.prayerTimes.maghrib, this.timezone).format('h:mm:ss A');
       this.night = moment.tz(this.prayerTimes.isha, this.timezone).format('h:mm:ss A');
       console.log(this.night)
   });


  }

}
