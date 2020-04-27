import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) {}

  getProducts(): Promise<Product[]> {
    return this.http.get('http://localhost:3000/products.json')
                    .toPromise()
                    .then(response => response.json() as Product[]);
    }
}