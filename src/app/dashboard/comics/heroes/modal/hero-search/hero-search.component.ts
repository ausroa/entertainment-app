import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchService } from './services';
import { FormControl, FormGroup } from '@angular/forms';

import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import { Hero } from "./model/hero";
import {PowerStatistics} from "./model/power-statistics";
import {HeroBiography} from "./model/hero-biography";
import {HeroAppearance} from "./model/hero-appearance";
import {HeroOccupation} from "./model/hero-occupation";
import {HeroConnections} from "./model/hero-connections";

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
  searchResult$: Observable<Hero[]>;

  constructor(public activeModal: NgbActiveModal, private _searchService: HeroSearchService) { }

  ngOnInit() {
  }

  searchHero() {
    this.heroSearched.next(true);

    this.searchResult$ = this._searchService.searchHeroes(this.heroSearchForm.controls.heroSearchName.value).pipe(
      takeUntil(this._destroy$),
      map(data => {
        const heroArray: Hero[] = [];

        data.results.forEach(h => {
          const powerStats: PowerStatistics = {
            intelligence: h.powerstats.intelligence,
            strength: h.powerstats.strength,
            speed: h.powerstats.speed,
            durability: h.powerstats.durability,
            power: h.powerstats.power,
            combat: h.powerstats.combat
          };

          const heroBio: HeroBiography = {
            fullName: h.biography['full-name'],
            alterEgos: h.biography['alter-egos'],
            aliases: h.biography.aliases,
            placeOfBirth: h.biography.placeOfBirth,
            firstAppearance: h.biography.firstAppearance,
            publisher: h.biography.publisher,
            alignment: h.biography.alignment
          };

          const heroAppearance: HeroAppearance = {
            gender: h.appearance.gender,
            race: h.appearance.race,
            height: h.appearance.height,
            weight: h.appearance.weight,
            eyeColor: h.appearance.eyeColor,
            hairColor: h.appearance.hairColor
          };

          const heroOccupation: HeroOccupation = {
            occupation: h.work.occupation,
            base: h.work.base
          };

          const heroConnections: HeroConnections = {
            groupAffiliation: h.connections.groupAffiliation,
            relatives: h.connections.relatives
          };

          const hero: Hero = {
            id: h.id,
            name: h.name,
            powerStats: powerStats,
            biography: heroBio,
            appearance: heroAppearance,
            work: heroOccupation,
            connections: heroConnections,
            image: h.image,
          };
          heroArray.push(hero);
        });
        return heroArray;
      })
    );
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
    this.heroSearched.unsubscribe();
  }

}
