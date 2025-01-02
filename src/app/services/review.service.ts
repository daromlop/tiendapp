import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/reviews.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private jsonUrl = '/assets/data/reviews.json';
  private _http = inject(HttpClient);

  getReviews(): Observable<Review[]> {
    return this._http.get<Review[]>(this.jsonUrl);
  }
}
