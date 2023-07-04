import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  // rooms will be property of this component
  // rooms will be passed from parent component
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    // emit this data back to perent component
    this.selectedRoom.emit(room);
  }

  constructor() {}
  ngOnInit(): void {}
}
