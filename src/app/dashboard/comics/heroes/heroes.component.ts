import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HeroSearchComponent } from './modal';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  openHeroSearch() {
    this._modalService.open(HeroSearchComponent, {size: 'lg'});
  }
}
