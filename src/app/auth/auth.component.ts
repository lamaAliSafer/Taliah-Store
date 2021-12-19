import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '.././services/firebase.service';

@Component({
  selector: 'auth-taliah',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
