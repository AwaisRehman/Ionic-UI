import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filters = {
    "meal_type" : "lunch",
    "cuisine" : "indian",
    "distance" : 5,
    "popular" : true,
    "priceByOrder" : 'highToLow',
    "price" :{
      "lowerPrice" : "5",
      "higherPrice" : "10",
    }

  }

  constructor() {}

  ngOnInit() {

  }

  mealTypeChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.meal_type = type;
  }

  cuisineTypeChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.cuisine = type;
  }

  distanceChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.distance = type;
  }
  popularChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.popular = type;
  }

  highLowChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.priceByOrder = type;
  }

  priceChange(ev) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.price.lowerPrice = type.lower;
    this.filters.price.higherPrice = type.upper;
    console.log(this.filters.price);
  }

  reset() {
    this.filters = {
      "meal_type" : "lunch",
    "cuisine" : "indian",
    "distance" : 5,
    "popular" : true,
    "priceByOrder" : 'highToLow',
    "price" :{
      "lowerPrice" : "5",
      "higherPrice" : "10",
    }

  }
  }



  applyFilters() {
    console.log(this.filters);
  }
}
