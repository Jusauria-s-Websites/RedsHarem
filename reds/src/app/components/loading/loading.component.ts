import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  dogGirl: string ="";

  ngOnInit(): void {
    // Randomly choose a drawing to animate
    this.dogGirl=  Math.random() < 0.5 ? 'spaniel' : 'floppy';
    
  }
}
