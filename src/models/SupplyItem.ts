import { Supply } from './Supply';
import { SupplyOrder } from './SupplyOrder';

export interface SupplyItem {
    Id: string;
    Quantity: number;
    Price: number;
    Supplier: Supply;
    SupplyOrder: SupplyOrder;
}