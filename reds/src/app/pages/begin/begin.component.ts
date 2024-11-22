import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [],
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss', '../../../styles.scss']
})
export class BeginComponent {
  private router = inject(Router);
goToHallway() {
  this.router.navigate(['hallway']);
}

}
