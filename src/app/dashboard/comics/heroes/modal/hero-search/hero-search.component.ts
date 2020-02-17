import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchService } from './services';
import { FormControl, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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

    this._searchService.searchHeroes(this.heroSearchForm.controls.heroSearchName.value).pipe(
      takeUntil(this._destroy$)
    ).subscribe(hero => {
      this.searchResult = hero.results;
    });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
    this.heroSearched.unsubscribe();
  }

}
