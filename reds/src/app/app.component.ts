import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoadingComponent } from "./components/loading/loading.component";
import { delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Reds Harem';

  isLoading = false;
  private navigationCompleted = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.navigationCompleted = false;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Delay hiding the loading screen for at least 2 seconds
        of(true).pipe(
          delay(2000),  // Delay for 2 seconds
          switchMap(() => {
            this.navigationCompleted = true;
            return of(false);
          })
        ).subscribe(() => {
          if (this.navigationCompleted) {
            this.isLoading = false;
          }
        });
      }
    });
  }
}
