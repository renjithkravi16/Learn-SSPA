import { Component } from '@angular/core';

@Component({
  selector: 'LA-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApp';

  loginButtonClick() {
    console.log('123');
  }
}
