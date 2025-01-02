import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  loading: boolean = true;

  public categoryProducts?: IProduct[] = [];

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  category = this._route.snapshot.params['category'];

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService
        .getCategoryProducts(params['category'])
        .subscribe((data: IProduct[]) => {
          this.categoryProducts = data;
          this.loading = false;
        });
    });
  }

  navigate(id: number): void {
    this._router.navigate([`categories/${this.category}`, id]);
  }
}
