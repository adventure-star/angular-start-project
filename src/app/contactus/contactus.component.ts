import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  todaydate;
  property;
  data;

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {

    this.todaydate = this.myservice.showTodayDate();
    this.property = this.myservice.property;
    this.data = this.myservice.getData();

    this.myservice.getData().subscribe((data1) => {
      this.data = Array.from(Object.keys(data1), k=>data1[k]);
      console.log(this.data);
   });

  }

}
