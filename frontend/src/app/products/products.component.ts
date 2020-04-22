import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  API: string;

  Products: any;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.API = environment.api;
    } else {
      this.API = environment.api;
    }
  }

  ngOnInit(): void {
    this.http.get(this.API + '/products').subscribe(res => {
      this.Products = res;
    })
  }

}
