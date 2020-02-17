import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchService } from './services';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { Hero } from './model/hero';
import {map, take, takeUntil} from 'rxjs/operators';
import {PowerStatistics} from './model/power-statistics';
import {HeroBiography} from './model/hero-biography';
import {HeroAppearance} from './model/hero-appearance';
import {HeroOccupation} from './model/hero-occupation';
import {HeroConnections} from './model/hero-connections';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  heroSearchForm: FormGroup = new FormGroup({
    heroSearchName: new FormControl()
  });
  heroSearched: Subject<boolean> = new Subject<boolean>();
  searchResult: any;

  constructor(public activeModal: NgbActiveModal, private _searchService: HeroSearchService) { }

  ngOnInit() {
  }

  searchHero() {
    this.heroSearched.next(true);
    this.heroSearched.unsubscribe();

    this._searchService.searchHeroes(this.heroSearchForm.controls.heroSearchName.value).pipe(
    ).subscribe(hero => {
      this.searchResult = hero.results;
    });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
