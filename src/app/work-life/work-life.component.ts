import { Component } from '@angular/core';

@Component({
  selector: 'app-work-life',
  standalone: true,
  imports: [],
  templateUrl: './work-life.component.html',
  styleUrl: './work-life.component.scss'
})
export class WorkLifeComponent {
  goToExternalSite(){
    window.location.href = 'https://github.com/Canayan06';
  }
}
