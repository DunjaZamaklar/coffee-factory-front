import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SUPPLIER_URL } from '../app/app.constants';
import { Supplier } from '../models/Supplier';

@Injectable({
    providedIn: 'root'
  })
  export class SupplierService {
  
    constructor(private httpClient: HttpClient) { }
  
    public getAllSuppliers(): Observable<any> {
      return this.httpClient.get(`${SUPPLIER_URL}`);
    }

    public getSupplierById(id: number): Observable<any> {
        return this.httpClient.get(`${SUPPLIER_URL}/${id}`);
      }
  
    public addSupplier(supplier: Supplier): Observable<any> {
      supplier.Id = "";
      return this.httpClient.post(`${SUPPLIER_URL}`, supplier);
    }
  
    public updateSupplier(supplier: Supplier): Observable<any> {
      return this.httpClient.put(`${SUPPLIER_URL}`, supplier);
    }
      
    public deleteSupplier(id: number): Observable<any> {
      return this.httpClient.delete(`${SUPPLIER_URL}/${id}`);
    }
  
  }