import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[];
  mes: string = 'send a message';

  constructor() {   
    this.notifications = [
      `Ahmed ${this.mes}`,
      `Mostafa ${this.mes}`,
      // ``,
      `Gamal ${this.mes}`,
      `Ali ${this.mes}`,
    ];
  }

  getNotifications():Observable<string>{
    return new Observable<string>((observer) => {
      //When value
      //observer.next();

      //when error in notification
      //observer.error();
 
      //When complete
      // observer.complete();

      let i = 0;
      let notificationInterval = setInterval(() => {
        if (i == this.notifications.length) {
          observer.complete();
        }

        if (this.notifications[i].length == 0) {
          observer.error("This notification is empty.");
        }

        observer.next(this.notifications[i]);
        i++;
        
      }, 3000);

      return {
        unsubscribe: () => {
          clearInterval(notificationInterval);
        }
      }
    })
  }
}
