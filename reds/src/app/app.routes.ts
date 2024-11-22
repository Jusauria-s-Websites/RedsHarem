import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BeginComponent } from './pages/begin/begin.component';
import { DoorComponent } from './pages/door/door.component';
import { RoomComponent } from './pages/room/room.component';

export const routes: Routes = [
    { path: '', 'title':'In front of the House', component: BeginComponent },
    { path: 'hallway', 'title':'Hallway', component: HomePageComponent },
    { path: 'door', 'title':'Door', component: DoorComponent },
    { path: 'room', 'title':'Room', component: RoomComponent }
  ];