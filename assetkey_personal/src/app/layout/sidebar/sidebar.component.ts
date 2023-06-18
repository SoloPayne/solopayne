import { Component, HostListener, OnInit } from '@angular/core';
import { sidebarData } from './sidebar-data';
import { NavDataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  collapsed?: boolean;
  switchValue: boolean = false;
  dataFromSidebar = sidebarData;

  constructor(private dataService: NavDataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe(value => {
      this.switchValue = value;
    });

 
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      // const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (screenWidth < 1000 ) {
        this.switchValue = true;
        this.dataService.updateData(this.switchValue);
      } else {
        this.switchValue = false;
        this.dataService.updateData(this.switchValue);
      }
    

  }

  isCollapsed(): void {
    this.switchValue = !this.switchValue;
    this.dataService.updateData(this.switchValue);
  }


  // @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowResize() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (screenWidth < 1000 ) {
      this.switchValue = true;
      this.dataService.updateData(this.switchValue);
    } else {
      this.switchValue = false;
      this.dataService.updateData(this.switchValue);
    }
  }


  
}
