import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [],
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss', '../../../styles.scss']
})
export class BeginComponent implements AfterViewInit {
  private router = inject(Router);
goToHallway() {
  this.router.navigate(['hallway']);
}
  ngAfterViewInit(): void {
    console.log(window.innerHeight); // Viewport height excluding bars
console.log(document.documentElement.clientHeight);
  }
}
