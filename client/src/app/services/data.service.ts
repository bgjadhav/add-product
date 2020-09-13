import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL_API = "http://localhost:3000/Api/productModel";

  constructor(private http: HttpClient) {}

  getAllProcuts(): Observable<any[]> {
    return this.http.get<any[]>(this.URL_API);
  }

  updateProducts(products): Observable<any[]> {
    return this.http.post<any[]>(this.URL_API+"/update",products);
  }

  addProducts(products): Observable<any[]> {
    return this.http.post<any[]>(this.URL_API,products);
  }
}
