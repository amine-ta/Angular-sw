import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { VaisseauService } from '../sw.service';
import { Pilote } from './Pilote';

import { Vaisseau } from './Vaisseau'


@Component({
  selector: 'app-sw-list',
  templateUrl: './sw-list.component.html',
  styleUrls: ['./sw-list.component.css']
})
export class SwListComponent implements OnInit {

 public Vaisseaux: any[] = [];
 public currentItem : any ;

  constructor(private vaisseauService: VaisseauService) { }

   ngOnInit() {
   this.getVaisseau();
  }

  getVaisseau(): void {  
    this.vaisseauService.getVaisseaux()
    .subscribe((data)=> {
      this.Vaisseaux=data.results
    });
}

  public detailVaiseau(vaiseau: Vaisseau) {
    vaiseau.pilotesDisplay =  [];
    this.getPilotesWithURL(vaiseau);
    this.currentItem = vaiseau;
  }

  public getPilotesWithURL(vaiseau : any): void { 
    vaiseau.pilots.forEach((pilote: any)=> 
   this.getPilotes(pilote, vaiseau));  
  }

   getPilotes(url: any, vaiseaux: Vaisseau ){
    this.vaisseauService.getPilotes(url).subscribe((data: any)=> {
      vaiseaux.pilotesDisplay.push(data);
    }); 
    }
}
