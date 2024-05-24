import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string=apiServer.serverUrl
constructor(private http:HttpClient,) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.apiUrl}`)
}

}
