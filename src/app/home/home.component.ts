import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit(): void {}
  renk(el: MouseEvent) {
    var element = el.target as HTMLElement;
    const elementt = document.getElementById('can') as HTMLElement;
    setInterval(()=>{
      console.log(getComputedStyle(element).backgroundColor);
      elementt.style.color = getComputedStyle(element).backgroundColor; 
    },500);
    // elementt?.style.color = getComputedStyle(element).backgroundColor;
    // elementt?.style.setProperty('--color', getComputedStyle(element).backgroundColor);

    // console.log(document.getElementById(el.id)?.style.background);

    // setTimeout(() => {
    //   const element2: any = document.getElementById('test')?.style;
    //   debugger;
    // }, 1000);
  }
}
