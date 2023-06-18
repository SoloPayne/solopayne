import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  moreWidth: boolean = false;

  constructor(){
    this.lottieConfig = {
      path: 'assets/pinjump.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };

    const currentDate = new Date();
    this.formattedDate = this.formatDate(currentDate);
  }


  formattedDate: string;

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  private formatDate(date: Date): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const suffix = this.getDateSuffix(dayOfMonth);
    const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${month}, ${year}`;

    return formattedDate;
  }

  private getDateSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    const lastDigit = day % 10;

    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }


  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

}
