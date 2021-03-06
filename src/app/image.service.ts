import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private per_Page: string = '&per_page=18';

  constructor(private http: Http) { }

  getImage(query) {
    return this.http.get(this.URL + query + this.per_Page).map(res => res.json())
  }

}
