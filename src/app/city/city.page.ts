import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: any;
  cities: any = []
  name!: string;
  image!: string;
  desc!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.getCities().subscribe(res => {
      this.cities = res;
      this.name = this.cities[this.id - 1].name;
      this.image = this.cities[this.id - 1].image;
      this.desc = this.cities[this.id - 1].desc
    })
  }

  getCities() {
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) => { return res.data })
      )
  }

}
