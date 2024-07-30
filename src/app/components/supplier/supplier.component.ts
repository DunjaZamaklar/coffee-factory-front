import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Supplier } from '../../../models/Supplier';
import { Subscription } from 'rxjs';
import { SupplierService } from '../../../services/Supplier.service';

@Component({
  selector: 'app-component-supplier',
  standalone: true,
  imports: [MatTableModule, MatToolbarModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent implements OnInit, OnDestroy {

  displayedColumns = ['Id', 'Name', 'Address', 'City', 'Country', 'PhoneNumber' , 'Email'];

  public subscription : Subscription = new Subscription();
  public dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>();

  constructor(private supplierService: SupplierService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.supplierService.getAllSuppliers().subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

}