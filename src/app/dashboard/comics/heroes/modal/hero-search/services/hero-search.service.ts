import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroSearchService {
  private _key = '10155611826251027';
  private _url = 'https://superheroapi.com/api/' + this._key + '/search/';

  constructor(private _restClient: HttpClient) { }

  searchHeroes(name: string): Observable<any> {
    return this._restClient.get(this._url + name);
  }

}
