import { Component, OnInit ,Input} from '@angular/core';
import {  RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent  implements OnInit{
 // rooms will be property of this component
 // rooms will be passed from parent component
  @Input() rooms : RoomList[] = [];

  constructor() { }
  ngOnInit(): void {
  }
}
