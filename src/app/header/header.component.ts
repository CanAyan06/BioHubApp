import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkLifeComponent } from '../work-life/work-life.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,WorkLifeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
