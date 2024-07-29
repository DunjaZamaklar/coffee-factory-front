import { Supplier } from './Supplier';
import { SupplyCategory } from './SupplyCategory';

export interface Supply {
  Id: string;
  Name: string;
  Quantity: number;
  Price: number;
  Supplier: Supplier;
  SupplyCategory: SupplyCategory;
}