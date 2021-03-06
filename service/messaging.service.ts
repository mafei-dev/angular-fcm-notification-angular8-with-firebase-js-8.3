import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

  }

  requestPermission() {
    this.angularFireMessaging.requestPermission.subscribe((token) => {
        console.log('requestPermission ',token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }

    );
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log('new message received. ', payload);
        this.currentMessage.next(payload);
      });
  }
}
