import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from '../popup/order-menu/order-menu.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {


  orders= [{
    "date": "Today, 19 June 2022",
    "order": [{
      "id": "01",
      "image": "001.jpg",
      "title": "Hamburger",
      "amount": "55.40",
      "transId": "12344321",
      "time": "20 Min",
      "status": "CONFIRM"
    },
    {
    "id": "02",
      "image": "002.jpg",
      "title": "Deep dish pizza",
      "amount": "48.50",
      "transId": "43211234",
      "time": "45 Min",
      "status": "CANCELLED"
    },
    {
      "id": "03",
      "image": "003.jpg",
      "title": "Bacon wrapped shrimp",
      "amount": "23.80",
      "transId": "12122323",
      "time": "10 Min",
      "status": "CONFIRM"
    }
  ]
  },
{
  "date": "1 July 1982",
  "order": [{
    "id": "04",
    "image": "001.jpg",
    "title": "Hamburger",
    "amount": "55.40",
    "transId": "11112222",
    "time": "20 Min",
    "status": "CONFIRM"
  },
  {
  "id": "05",
    "image": "002.jpg",
    "title": "Deep dish pizza",
    "amount": "48.50",
    "transId": "43211234",
    "time": "45 Min",
    "status": "CANCELLED"
  },
  {
    "id": "06",
    "image": "003.jpg",
    "title": "Bacon wrapped shrimp",
    "amount": "23.80",
    "transId": "12122323",
    "time": "10 Min",
    "status": "CONFIRM"
  }
]
},
{
  "date": "30 Dec 1993",
  "order": [{
    "id": "07",
    "image": "001.jpg",
    "title": "Hamburger",
    "amount": "55.40",
    "transId": "11112222",
    "time": "20 Min",
    "status": "CONFIRM"
  },
  {
  "id": "08",
    "image": "002.jpg",
    "title": "Deep dish pizza",
    "amount": "48.50",
    "transId": "43211234",
    "time": "45 Min",
    "status": "CANCELLED"
  },
  {
    "id": "09",
    "image": "003.jpg",
    "title": "Bacon wrapped shrimp",
    "amount": "23.80",
    "transId": "12122323",
    "time": "10 Min",
    "status": "CONFIRM"
  }
]
}

]

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {
  }

  segmentChanged(ev) {
    console.log(ev.detail.value);
  }

  async presentPopover(ev) {
     const popover = await this.popoverController.create({
      component: OrderMenuPage,
      event:ev,
      mode:'ios',
      translucent: true
     });

     await popover.present();
  }

}
