import { Component, OnInit } from '@angular/core';
import { sidebarData } from '../sidebar/sidebar-data';
import { NavDataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
logout() {
throw new Error('Method not implemented.');
}
  switchValue: boolean = true;
  dataFromSidebar = sidebarData;
  
  constructor(private dataService: NavDataService){
     
  }

  ngOnInit(): void {
    
  }


  isCollapsed(): void {
    this.switchValue = !this.switchValue;
    this.dataService.updateData(this.switchValue);
    console.log(this.switchValue);
}

}
