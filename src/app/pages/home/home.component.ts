import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';
import { HttpClient } from '@angular/common/http';
import { FoodService } from './food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  data: any[] = [];
  filteredData: any[] = [];

  constructor(
    public http: HttpClient,
    @Inject(LOCALE_ID) public localeId: string,
    public styleModeService: StyleModeService,
    public foodService: FoodService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  filterData() {
    if (!this.searchValue) {
      this.filteredData = this.data;
      return;
    }

    this.filteredData = this.data.filter((item: any) =>
      item.list.some((subItem: any) =>
        subItem.Name.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    );
  }

  loadData() {
    this.foodService.getFood().subscribe((data: any) => {
      console.log(data);
      this.data = data;
      this.filteredData = data;
    });
  }

  onSearchInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
  }
}
