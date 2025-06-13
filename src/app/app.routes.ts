import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MypageComponent } from './mypage/mypage.component';
import { ExampleComponent } from './example/example.component';
import { MylistComponent } from './mylist/mylist.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "mypage",
        component: MypageComponent
    },
    {
        path: "exemplo",
        component: ExampleComponent
    },
    {
        path: "list",
        component: MylistComponent
    }
];
