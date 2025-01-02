import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Review } from '../../models/reviews.model';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  loading: boolean = true;
  public product?: IProduct;
  reviews: Review[] = [];

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  private _reviewService = inject(ReviewService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
    this._reviewService.getReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  // Genera un arreglo con la cantidad de estrellas llenas
  getStars(rating: number): number[] {
    return Array(rating).fill(0); // Retorna un arreglo de tamaño `rating`
  }

  // Genera un arreglo con la cantidad de estrellas vacías
  getEmptyStars(rating: number): number[] {
    const maxStars = 5;
    return Array(maxStars - rating).fill(0); // Retorna el resto de las estrellas
  }
}
