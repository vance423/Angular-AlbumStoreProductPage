import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response: { json: () => any; }) => response.json());
  }
}
