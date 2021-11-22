import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { album } from './album';

import { map, Observable} from 'rxjs';

 
@Injectable()
export class ProductService {
  
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';
  private _http: any;

  constructor(private http:Http) { }

  getAlbum(id: number): Observable<album> {
    return this._http.get(this._albumUrl).pipe(map((response: { json: () => album; }) => <album>response.json()));
  }
}