import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  isvisible = false;
  userInput:string = '';
  role:string = '';

  rooms:Room = {
    totalRooms : 10,
    availableRooms : 5,
    bookedRooms : 5,
  }

  roomList : RoomList[] = [
    {
      roomNumber : 101,
      roomType : 'Single',
      roomPrice : 1000,
      roomStatus : 'Available',
      roomImage : 'assets/images/room1.jpg',
      roomDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      roomNumber : 102,
      roomType : 'Double',
      roomPrice : 2000,
      roomStatus : 'Available',
      roomImage : 'assets/images/room2.jpg',
      roomDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      roomNumber : 103,
      roomType : 'Single',
      roomPrice : 1000,
      roomStatus : 'Available',
      roomImage : 'assets/images/room3.jpg',
      roomDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
  ]



  onClick(){

     this.isvisible = !this.isvisible;
  }
  Submit(){
    //console.log(#data)
    this.role = this.userInput;

  }

}
