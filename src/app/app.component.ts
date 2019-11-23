import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent, SwPush } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pushputo';


  token=''
  constructor(private swUpdate: SwUpdate,private afMessaging: AngularFireMessaging){
 //Token

    //Para firbase Messaging

    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
          this.token = token;
        },
        (error) => { console.error(error); }
      );







    // servicios de pwa
  if (this.swUpdate.isEnabled) {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      if (confirm('Hola amiguita!, Ya hay una nueva actualización, ¿Deseas descargarla?')) {
        window.location.reload();
      }
    });
  }
  }
}
