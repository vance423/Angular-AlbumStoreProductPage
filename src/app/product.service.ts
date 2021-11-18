import { Injectable } from '@angular/core';

import { map } from "rxjs/operators"; 
import { Http ,Response } from '@angular/http'
import { from } from 'rxjs';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(map((response: any) => response.json()));;
  }
}
