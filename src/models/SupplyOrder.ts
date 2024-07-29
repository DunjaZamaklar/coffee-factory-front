import { Employee } from "./Employee";
import { SupplyOrderStatus } from "./SupplyOrderStatus";

export interface SupplyOrder {
    Id: string;
    TotalPrice: number;
    EmployeeContract: Employee;
    CreatedDate: Date;
    CompletedDate?: Date;
    SupplyOrderStatus: SupplyOrderStatus;
}