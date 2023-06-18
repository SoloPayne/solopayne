import { Component, OnInit } from '@angular/core';
import { NavDataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assetkey_personal';
  switchValue?: boolean;



  constructor( private dataService: NavDataService){

  }

  ngOnInit(): void{
    this.dataService.data$.subscribe(value => this.switchValue = value);
    console.log(this.switchValue);
  }


}
