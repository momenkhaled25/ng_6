import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VisionComponent } from '../vision/vision.component';
import { ValuesComponent } from '../values/values.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
