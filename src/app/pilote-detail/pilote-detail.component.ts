import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilote-detail',
  templateUrl: './pilote-detail.component.html',
  styleUrls: ['./pilote-detail.component.css']
})
export class PiloteDetailComponent implements OnInit {
  @Input() pilote: any ;
  constructor() { }

  ngOnInit(): void {
  
  }
  
}
