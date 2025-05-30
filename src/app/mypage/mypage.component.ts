import { Component } from '@angular/core';
import { MycomponentComponent } from '../mycomponent/mycomponent.component';

@Component({
  selector: 'app-mypage',
  imports: [
    MycomponentComponent
  ],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {

}
