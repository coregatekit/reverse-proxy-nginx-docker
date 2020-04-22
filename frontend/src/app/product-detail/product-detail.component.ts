import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  API: string;
  product_id: string;
  product: any;

  constructor(private actRoute: ActivatedRoute, private http: HttpClient) {
    this.product_id = this.actRoute.snapshot.params.id;
    if (environment.production) {
      this.API = environment.api;
    } else {
      this.API = environment.api;
    }
  }

  ngOnInit(): void {
    this.http.get(this.API + '/products/' + this.product_id).subscribe(res => {
      this.product = res;
    })
  }

}
