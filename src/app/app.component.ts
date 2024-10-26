import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/badroute',
      name: 'Bad Route',
      exact: true
    }
  ]
  
  
}
