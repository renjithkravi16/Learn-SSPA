import { Component } from '@angular/core';
import * as singleSpa from 'single-spa';

@Component({
  selector: 'LA-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApp';

  loginButtonClick() {
    console.log('123');
    singleSpa.navigateToUrl('/home');
  }
}
