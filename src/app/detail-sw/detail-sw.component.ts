import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaisseau } from '../sw-list/Vaisseau';
import { VaisseauService } from '../sw.service';

@Component({
  selector: 'app-detail-sw',
  templateUrl: './detail-sw.component.html',
  styleUrls: ['./detail-sw.component.css']
})
export class DetailSwComponent implements OnInit {
  @Input() vaiseauDetail: any ;
  public currentPilote: any;
  constructor() {
  
    }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.currentPilote = undefined;
}

detailPilote(pilote: any){ 
  this.currentPilote = pilote;
}
}