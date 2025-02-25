import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CacheService } from '@doc/cache';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public cacheService: CacheService) {}
}
