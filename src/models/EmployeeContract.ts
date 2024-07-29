import { Employee } from './Employee';
import { EmployeePosition } from './EmployeePosition';

export interface EmployeeContract {
    Id: string;
    Type: string;
    StartDate: Date;
    EndDate?: Date;
    ActiveFlag: boolean;
    Employee: Employee;
    EmployeePosition: EmployeePosition;
  }