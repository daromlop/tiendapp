import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  category = this._route.snapshot.params['category'];

  loading: boolean = true;

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
      this.loading = false;
    });
  }

  navigate(id: number, category: String): void {
    this._router.navigate([`categories/${category}`, id]);
  }
}
