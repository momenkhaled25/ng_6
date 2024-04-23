import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , OnDestroy {
  
  subscription!: Subscription;
  notifications: string[] = [];
  

  constructor(private _Notificationser: NotificationService) { }
  
  ngOnInit(): void {
    this.subscription = this._Notificationser.getNotifications().subscribe({
      next: (notification) => {
        this.notifications.push(notification);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
      },
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeNotification(index: number): void {
    this.notifications.splice(index, 1);
  }
}