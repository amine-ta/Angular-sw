import { Component, Input, OnInit } from '@angular/core';
import { Pilote } from '../sw-list/Pilote';

@Component({
  selector: 'app-pilote-detail',
  templateUrl: './pilote-detail.component.html',
  styleUrls: ['./pilote-detail.component.css']
})
export class PiloteDetailComponent implements OnInit {
  @Input() pilote: Pilote | undefined ;
  constructor() { }

  ngOnInit(): void {
  
  }
  
}
